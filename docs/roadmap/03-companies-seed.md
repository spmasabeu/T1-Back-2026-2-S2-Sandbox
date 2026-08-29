# Fase 3: Companies y seed

## Modelo `Company`

- `id`: UUID
- `name`: string
- `symbol`: string unico
- `description`: string
- `sector`: string
- `logoUrl`: string nullable
- `marketCap`: integer
- `isPublic`: boolean
- `creatorId`: UUID nullable

## Seed

- Fuente: lista de empresas del S&P 500.
- Cada empresa seed queda publica.
- Cada sync/reset asigna `marketCap` aleatorio entre `1000` y `5000`.
- El seed usa `symbol` como llave unica y actualiza empresas base existentes.

## Endpoints de lectura

- `GET /api/companies`
- `GET /api/companies/:id`

Filtros soportados:

- `search`
- `sector`
- `isPublic`
- `page`
- `limit`
