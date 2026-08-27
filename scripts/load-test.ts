import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';

const baseUrl = process.env.API_BASE_URL || 'http://127.0.0.1:3000/api';
const path = process.env.LOAD_PATH || '/health';
const method = process.env.LOAD_METHOD || 'GET';
const totalRequests = positiveEnv('LOAD_REQUESTS', 500);
const concurrency = Math.min(totalRequests, positiveEnv('LOAD_CONCURRENCY', 25));
const rampMs = positiveEnv('LOAD_RAMP_MS', 2000);
const body = process.env.LOAD_BODY;
const token = process.env.LOAD_TOKEN;

function positiveEnv(name: string, fallback: number): number {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : fallback;
}

function percentile(values: number[], p: number): number {
  assert(values.length > 0);
  return values[Math.min(values.length - 1, Math.ceil((p / 100) * values.length) - 1)];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function worker(id: number, url: string, latencies: number[], statuses: Map<number | 'ERR', number>, state: { nextRequest: number }) {
  await sleep((id * rampMs) / concurrency);

  while (state.nextRequest < totalRequests) {
    state.nextRequest += 1;
    const started = performance.now();
    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...(body ? { 'content-type': 'application/json' } : {}),
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
        body,
      });
      await response.arrayBuffer();
      statuses.set(response.status, (statuses.get(response.status) || 0) + 1);
    } catch {
      statuses.set('ERR', (statuses.get('ERR') || 0) + 1);
    } finally {
      latencies.push(performance.now() - started);
    }
  }
}

async function main() {
  const url = `${baseUrl}${path}`;
  const state = { nextRequest: 0 };
  const latencies: number[] = [];
  const statuses = new Map<number | 'ERR', number>();
  const started = performance.now();

  await Promise.all(Array.from({ length: concurrency }, (_, id) => worker(id, url, latencies, statuses, state)));
  const durationSeconds = (performance.now() - started) / 1000;
  latencies.sort((a, b) => a - b);

  const ok = [...statuses.entries()].filter(([status]) => typeof status === 'number' && status < 400).reduce((sum, [, count]) => sum + count, 0);
  const blocked = statuses.get(429) || 0;
  const failed = totalRequests - ok - blocked;

  console.log(
    JSON.stringify(
      {
        url,
        totalRequests,
        concurrency,
        rampMs,
        durationSeconds: Number(durationSeconds.toFixed(2)),
        requestsPerSecond: Number((totalRequests / durationSeconds).toFixed(2)),
        latencyMs: {
          avg: Number((latencies.reduce((sum, value) => sum + value, 0) / latencies.length).toFixed(2)),
          p50: Number(percentile(latencies, 50).toFixed(2)),
          p95: Number(percentile(latencies, 95).toFixed(2)),
          p99: Number(percentile(latencies, 99).toFixed(2)),
          max: Number(latencies[latencies.length - 1].toFixed(2)),
        },
        statusCounts: Object.fromEntries(statuses),
        ok,
        blocked,
        failed,
      },
      null,
      2
    )
  );
}

main();
