import assert from 'node:assert/strict';
import { Server } from 'node:http';
import { AddressInfo } from 'node:net';

async function listen(): Promise<Server> {
  const { default: app } = await import('../src/app');
  return new Promise((resolve, reject) => {
    const server = app.listen(0, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

async function get(baseUrl: string) {
  const response = await fetch(`${baseUrl}/api/health`);
  return { status: response.status, body: await response.json(), retryAfter: response.headers.get('retry-after') };
}

async function main() {
  process.env.JWT_SECRET = 'rate-limit-selfcheck-secret';
  process.env.RATE_LIMIT_MAX = '2';
  process.env.RATE_LIMIT_TOKEN_MAX = '2';
  process.env.RATE_LIMIT_WINDOW_MS = '60000';

  const { resetRateLimiter } = await import('../src/middlewares/rateLimiter');
  resetRateLimiter();
  const server = await listen();
  const baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;

  try {
    assert.equal((await get(baseUrl)).status, 200);
    assert.equal((await get(baseUrl)).status, 200);

    const limited = await get(baseUrl);
    assert.equal(limited.status, 429);
    assert.equal(limited.body.error, 'Demasiadas solicitudes. Intenta nuevamente más tarde.');
    assert.equal(limited.retryAfter, '60');
  } finally {
    server.close();
  }
}

main().then(() => {
  console.log('rate-limit self-check ok');
});
