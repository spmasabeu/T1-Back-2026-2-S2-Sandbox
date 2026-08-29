# Fase 1: Base TS Express

Backend base con TypeScript, Express, Sequelize, PostgreSQL, JWT, Swagger y rate limit.

## Componentes

- `User`: cuenta con `username`, password hasheada y balance.
- `Company`: empresa publica o privada con `marketCap`.
- `Holding`: relacion unica entre usuario y empresa comprada.

## Endpoints MVP

- `POST /api/login`
- `GET /api/me`
- `PATCH /api/me`
- `DELETE /api/me`
- `GET /api/companies`
- `GET /api/companies/:id`
- `POST /api/companies`
- `PATCH /api/companies/:id`
- `DELETE /api/companies/:id`
- `POST /api/companies/:id/publish`
- `POST /api/companies/:id/buy`
- `POST /api/companies/:id/sell`
- `POST /api/companies/:id/donate`
- `GET /api/portfolio`
- `GET /api/rankings/users`
- `GET /api/rankings/companies`

## Reglas Base

- Usuario nuevo parte con `10000`.
- Empresas seed tienen `marketCap` aleatorio entre `1000` y `5000`.
- Reset horario elimina holdings, reinicia balances y resembrar valores base.
- Swagger vive en `/api-docs`.
