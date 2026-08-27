# T1 Back 2026-2

Backend MVP en TypeScript, Express, Sequelize y PostgreSQL.

## Docs

- Flujo API/frontend: `docs/api-flow.md`
- Deploy Render: `docs/deploy-render.md`
- Performance local: `docs/performance.md`
- Auditoria final: `docs/auditoria-final.md`
- Roadmap: `docs/roadmap/`

## Instalacion

```bash
npm install
cp .env.example .env
```

Configura PostgreSQL en `.env`. Puedes usar `DATABASE_URL` o las variables `DB_*`.

Variables principales:

- `DATABASE_URL` o `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_SSL`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `BACKEND_URL`
- `PORT`
- `NODE_ENV`
- `RATE_LIMIT_WINDOW_MS`, `RATE_LIMIT_MAX`, `RATE_LIMIT_TOKEN_MAX`, `RATE_LIMIT_DISABLED`

## Scripts

```bash
npm run dev
npm run build
npm run check
npm run check:api
npm run check:rate-limit
npm run perf
npm run start
npm run check:rankings
```

## Validacion y produccion

```bash
npm run check
npm run build
npm run start
```

En Render puedes usar el Blueprint `render.yaml`. Detalle: `docs/deploy-render.md`.

El seed inicial carga 503 constituyentes del S&P 500. `marketCap` usa datos financieros escalados para calzar con el schema actual y `totalShares` conserva un precio referencial cercano al dato fuente.

## Performance local

Con la API corriendo:

```bash
npm run perf
LOAD_PATH='/companies?limit=20' LOAD_REQUESTS=300 LOAD_CONCURRENCY=30 npm run perf
```

Si quieres medir throughput sin rate limit, levanta el server con `RATE_LIMIT_DISABLED=true`.

## Flujo MVP

1. `POST /api/login`
2. `GET /api/companies`
3. `POST /api/companies`
4. `POST /api/companies/:id/publish`
5. `POST /api/companies/:id/buy`
6. `POST /api/companies/:id/donate`
7. `POST /api/companies/:id/sell`
8. `GET /api/portfolio`
9. `GET /api/rankings/users`
10. `GET /api/rankings/companies`

## API

Servidor local: `http://localhost:3000/api`

Swagger: `http://localhost:3000/api-docs`

Endpoints principales:

- `POST /api/login`
- `GET /api/me`
- `GET /api/companies`
- `POST /api/companies`
- `POST /api/companies/:id/publish`
- `POST /api/companies/:id/buy`
- `POST /api/companies/:id/sell`
- `POST /api/companies/:id/donate`
- `GET /api/portfolio`
- `GET /api/rankings/users`
- `GET /api/rankings/companies`

Detalle de requests/responses: `docs/api-flow.md`.
