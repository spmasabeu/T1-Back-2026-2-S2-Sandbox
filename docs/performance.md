# Performance Local

## Scripts

```bash
npm run perf
LOAD_PATH='/companies?limit=20' LOAD_REQUESTS=300 LOAD_CONCURRENCY=30 npm run perf
```

Variables:

- `API_BASE_URL`: default `http://127.0.0.1:3000/api`
- `LOAD_PATH`: default `/health`
- `LOAD_REQUESTS`: default `500`
- `LOAD_CONCURRENCY`: default `25`
- `LOAD_RAMP_MS`: default `2000`
- `LOAD_METHOD`: default `GET`
- `LOAD_BODY`: JSON opcional
- `LOAD_TOKEN`: token Bearer opcional

## Resultados De Referencia

Medido en local contra Postgres local, con `RATE_LIMIT_DISABLED=true`.

| Endpoint | Requests | Concurrency | Resultado | RPS | p95 |
| --- | ---: | ---: | --- | ---: | ---: |
| `/api/health` | 500 | 25 | 500 OK | 260.23 | 71.24 ms |
| `/api/companies?limit=20` | 300 | 30 | 300 OK | 113.95 | 222.79 ms |

## Rate Limit

Config por `.env`:

```env
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=120
RATE_LIMIT_TOKEN_MAX=120
RATE_LIMIT_DISABLED=false
```

El limiter cuenta por IP y por token Bearer. Es in-memory.

ponytail: in-memory limiter, Redis-backed store if multiple production instances need shared quotas.
