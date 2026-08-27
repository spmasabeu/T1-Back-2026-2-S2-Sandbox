# Deploy En Render

Render usa Blueprints con `render.yaml`. Este repo ya incluye uno.

## Blueprint

1. Sube el repo a GitHub.
2. En Render, crea un Blueprint desde el repo.
3. Render detecta `render.yaml` en la raiz.
4. Confirma los recursos:
   - Web service: `t1-back-2026-2`
   - Postgres: `t1-back-2026-2-db`
5. Deploy.

El Blueprint configura:

- `DATABASE_URL` desde Postgres interno de Render.
- `JWT_SECRET` generado por Render.
- `NODE_ENV=production`.
- Rate limit default.
- Health check en `/api/health`.
- Build: `npm install && npm run build`.
- Start: `npm run start`.

## Manual

1. `New > PostgreSQL`.
2. Crea la DB en la misma region que la API.
3. `New > Web Service`.
4. Conecta el repo.
5. Configura:
   - Runtime: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Health Check Path: `/api/health`
6. Env vars:

```env
DATABASE_URL=<Internal Database URL>
JWT_SECRET=<secreto-largo>
JWT_EXPIRES_IN=24h
NODE_ENV=production
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=120
RATE_LIMIT_TOKEN_MAX=120
RATE_LIMIT_DISABLED=false
```

`BACKEND_URL` es opcional en Render: si no existe, Swagger usa `RENDER_EXTERNAL_URL`.

## Verificacion

```bash
curl https://TU-SERVICIO.onrender.com/api/health
```

Swagger:

```txt
https://TU-SERVICIO.onrender.com/api-docs
```

## Migraciones

Este MVP crea tablas con `sequelize.sync({ alter: true })` al arrancar. No necesita migraciones para una DB vacia.

Para produccion real con datos importantes, cambiar a migraciones versionadas y usar `preDeployCommand`.
