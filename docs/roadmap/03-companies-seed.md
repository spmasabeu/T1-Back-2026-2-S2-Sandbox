# Fase 3: Empresas y seed inicial

## Objetivo
Crear el modelo de empresas, endpoints de lectura y seed inicial de empresas publicas del S&P 500.

## Modelo

### Company
- `id`: UUID
- `name`: string requerido
- `symbol`: string unico, requerido, uppercase
- `description`: string requerido
- `sector`: string requerido
- `logoUrl`: string opcional
- `marketCap`: integer requerido
- `totalShares`: integer requerido
- `availableShares`: integer requerido
- `isPublic`: boolean requerido
- `creatorId`: UUID opcional

## Precio por accion
Calcular en responses:

```ts
Math.floor(marketCap / totalShares)
```

No permitir `totalShares <= 0`.

## Endpoints

### `GET /api/companies`
Query params:
- `page`
- `limit`
- `search`
- `sector`
- `isPublic`

Retorna empresas paginadas.

### `GET /api/companies/:id`
Retorna una empresa por ID.

## Seed
Crear empresas publicas iniciales con:
- `isPublic = true`
- `creatorId = null`
- `availableShares = totalShares`
- 503 constituyentes del S&P 500.
- `marketCap` escalado para mantener el juego accesible.

El seed no debe borrar empresas creadas por usuarios. Usar `bulkCreate` con `updateOnDuplicate` o buscar por `symbol` y crear solo si no existe.

## Archivos esperados
- `src/models/Company.ts`
- `src/controllers/companyController.ts`
- `src/routes/companyRoutes.ts`
- `src/seeders/seedCompanies.ts`

## Lineamientos
- Mantener un unico seed fuente en `src/seeders/seedCompanies.ts`.
- Usar datos publicos del S&P 500 con valores escalados para el juego.
- Validaciones minimas:
  - `name`, `symbol`, `description`, `sector` no vacios
  - `marketCap > 0`
  - `totalShares > 0`
  - `availableShares >= 0`
  - `availableShares <= totalShares`
- Todavia no implementar crear empresa de usuario; eso va en Fase 5.

## Validacion
- Seed corre al iniciar.
- `GET /api/companies` lista empresas publicas iniciales.
- Cada empresa incluye `sharePrice` calculado.
- Reiniciar servidor no duplica empresas por `symbol`.

## Resultado esperado
Catalogo publico listo para que el frontend muestre mercado inicial.
