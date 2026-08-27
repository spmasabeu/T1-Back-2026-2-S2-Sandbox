import { createHash } from 'node:crypto';
import { NextFunction, Request, Response } from 'express';

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();
let requestsSincePrune = 0;

function positiveEnv(name: string, fallback: number): number {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function tokenKey(req: Request): string | null {
  const match = req.header('authorization')?.match(/^Bearer\s+(.+)$/i);
  if (!match) {
    return null;
  }
  return `token:${createHash('sha256').update(match[1]).digest('hex')}`;
}

function hit(key: string, max: number, windowMs: number, now: number) {
  const current = buckets.get(key);
  const bucket = !current || current.resetAt <= now ? { count: 0, resetAt: now + windowMs } : current;
  bucket.count += 1;
  buckets.set(key, bucket);
  return { limited: bucket.count > max, remaining: Math.max(0, max - bucket.count), resetAt: bucket.resetAt };
}

function prune(now: number) {
  requestsSincePrune += 1;
  if (requestsSincePrune < 100) {
    return;
  }
  requestsSincePrune = 0;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }
}

export function resetRateLimiter() {
  buckets.clear();
  requestsSincePrune = 0;
}

export default function rateLimiter(req: Request, res: Response, next: NextFunction) {
  if (process.env.RATE_LIMIT_DISABLED === 'true') {
    return next();
  }

  const now = Date.now();
  const windowMs = positiveEnv('RATE_LIMIT_WINDOW_MS', 60_000);
  const ipMax = positiveEnv('RATE_LIMIT_MAX', 120);
  const tokenMax = positiveEnv('RATE_LIMIT_TOKEN_MAX', ipMax);
  const keys = [{ key: `ip:${req.ip || req.socket.remoteAddress || 'unknown'}`, max: ipMax }];
  const authKey = tokenKey(req);

  if (authKey) {
    keys.push({ key: authKey, max: tokenMax });
  }

  prune(now);

  const results = keys.map(({ key, max }) => hit(key, max, windowMs, now));
  const blocked = results.find((result) => result.limited);
  const resetAt = Math.min(...results.map((result) => result.resetAt));

  res.setHeader('X-RateLimit-Limit', String(ipMax));
  res.setHeader('X-RateLimit-Remaining', String(Math.min(...results.map((result) => result.remaining))));
  res.setHeader('X-RateLimit-Reset', String(Math.ceil(resetAt / 1000)));

  if (blocked) {
    res.setHeader('Retry-After', String(Math.max(1, Math.ceil((blocked.resetAt - now) / 1000))));
    return res.status(429).json({ error: 'Demasiadas solicitudes. Intenta nuevamente más tarde.' });
  }

  return next();
}
