# Auditoria Final Backend T1 2026-2

## Veredicto

Implementacion queda OK para el MVP planificado. El backend actual cubre el roadmap de `docs/roadmap`, mantiene la familiaridad de la version `T1-Back-2026-1-S1`, y el flujo principal fue probado con mocks y con Postgres real temporal.

## Plan vs Implementacion

| Area | Plan | Estado |
| --- | --- | --- |
| Base TS/Express | `app`, `server`, `/api`, `/api-docs`, `/api/health` | OK |
| Auth | login auto-registro, JWT, `/me`, password oculto | OK |
| Empresas | modelo, seed S&P 500, paginacion, `sharePrice` | OK |
| Holdings/portfolio | holding unico por usuario/empresa, patrimonio calculado | OK |
| Operaciones | crear, publicar, comprar, vender, donar con transacciones | OK |
| Rankings | usuarios por patrimonio, empresas por `marketCap` | OK |
| Swagger | endpoints MVP documentados | OK |
| README/produccion | scripts, variables, Swagger, comandos de host | Ajustado |

## Comparacion Con 2026-1-S1

- Reutiliza el patron correcto: Express app separado del server, Sequelize, JWT, bcrypt, Swagger y error handler global.
- Mantiene `toSafeObject()` para no exponer password.
- Cambia el dominio de artistas a empresas/holdings sin arrastrar endpoints viejos.
- Omite cron/reset/historial de la version anterior. Esto calza con el roadmap 2026-2, que deja cron, historial, precios aleatorios y matching fuera del MVP.
- Seed actual es mejor para este semestre: usa 503 empresas del S&P 500, no borra data de usuarios y evita duplicar por simbolo.

## Cambios Aplicados

- `package.json`: `npm run check` ahora ejecuta build, ranking self-check y API self-check.
- `scripts/api-selfcheck.ts`: prueba HTTP con mocks en memoria para health, auth, companies, publish, buy, donate, sell, portfolio y rankings.
- `scripts/rate-limit-selfcheck.ts`: prueba `429` del rate limiter con limite bajo.
- `scripts/load-test.ts`: prueba de carga local sin dependencias externas.
- `src/controllers/authController.ts`: `JWT_SECRET` se valida antes de crear/leer usuario en login.
- `src/middlewares/rateLimiter.ts`: limite in-memory por IP y por token Bearer.
- `src/models/User.ts`: usuarios nuevos parten con `100000` de balance inicial.
- `src/seeders/seedCompanies.ts`: seed unico con 503 empresas del S&P 500 y `marketCap` escalado para gameplay.
- `tsconfig.json`: usa `module`/`moduleResolution` `Node16`/`node16`, sin warning `node10`.
- `README.md`: agrega variables principales, `check:api`, comandos de produccion y economia inicial.
- `docs/roadmap`: alineado con S&P 500 y balance inicial `100000`.

## Pruebas Ejecutadas

```bash
npm run check
```

Resultado: OK. Ejecuta:

- `tsc -p tsconfig.json`
- `scripts/ranking-selfcheck.ts`
- `scripts/api-selfcheck.ts`
- `scripts/rate-limit-selfcheck.ts`

Prueba real con Postgres temporal:

- Contenedor: `postgres:16-alpine`
- Puerto local: `55432`
- Backend: `PORT=3100`
- Flujo probado: login A/B, listar empresas seed, crear empresa privada, publicar, comprar, donar, vender, portfolio, rankings, Swagger y health.
- Resultado: OK.

Datos finales de prueba real:

```json
{
  "users": ["ana_mtbxryam", "benja_mtbxryam"],
  "symbol": "TBXRYAM",
  "companyId": "aa859a2a-b544-46d3-93c6-8a278fd54044"
}
```

Prueba de performance final sin rate limit:

Medicion tomada antes de ampliar el seed a S&P 500. La suite actual valida conteo, unicidad y valores del seed; repetir `npm run perf` contra Render cuando el deploy este arriba.

| Endpoint | Requests | Concurrency | Resultado | RPS | p95 |
| --- | ---: | ---: | --- | ---: | ---: |
| `/api/health` | 500 | 25 | 500 OK | 260.23 | 71.24 ms |
| `/api/companies?limit=20` | 300 | 30 | 300 OK | 113.95 | 222.79 ms |

Prueba de rate limit real:

- Server temporal en `3101` con `RATE_LIMIT_MAX=5`.
- Primeras 5 requests a `/api/health`: `200`.
- Sexta request: `429` con `Retry-After: 60`.

## Gaps Restantes

- `npm run dev` con defaults falla en esta maquina porque el Postgres existente en `5432` rechaza `postgres/postgres`. Solucion: crear `.env` real o usar `DATABASE_URL`.
- `npm audit --audit-level=high` pasa, pero reporta 2 vulnerabilidades `moderate` transitivas en `uuid` via `sequelize`. No aplicar `npm audit fix --force`: propone downgrade mayor a Sequelize 3.
- `sequelize.sync({ alter: true })` esta OK para este MVP docente porque fue planificado. Para produccion con datos reales, migraciones.
- Rate limiter actual es in-memory. Para multiples instancias o alta carga real, usar Redis/servicio externo.
- Produccion no fue desplegada desde aqui porque no hay credenciales/proyecto Render conectado. El repo queda listo para deploy con `DATABASE_URL`, `JWT_SECRET`, `BACKEND_URL`, `npm run build` y `npm run start`.

## Refactor/Simplificacion

Lean already. Ship.

- No hay capas `services`, cron, historial, WebSockets, factories o abstracciones especulativas.
- La duplicacion de `sharePrice = Math.floor(marketCap / totalShares)` es de una linea y clara; no conviene crear helper compartido todavia.
- `pg-hstore` se mantiene porque el roadmap pidio dependencias equivalentes a la tarea anterior.
- No commitear `node_modules/` ni `dist/`; ya estan cubiertos por `.gitignore`.
