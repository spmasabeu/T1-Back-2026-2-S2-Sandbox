# Fase 4: Holdings y portfolio

## Objetivo
Agregar propiedad de acciones mediante holdings y exponer el portfolio del usuario autenticado.

## Modelo

### Holding
- `id`: UUID
- `userId`: UUID requerido
- `companyId`: UUID requerido
- `shares`: integer requerido

Restriccion recomendada:
- Un holding por par `(userId, companyId)`.

## Endpoint

### `GET /api/portfolio`
Requiere auth.

Retorna:

```json
{
  "balance": 100000,
  "holdings": [
    {
      "company": {
        "id": "uuid",
        "name": "DCC Mining",
        "symbol": "DCCM",
        "sharePrice": 100
      },
      "shares": 10,
      "value": 1000
    }
  ],
  "portfolioValue": 1000,
  "netWorth": 101000
}
```

## Archivos esperados
- `src/models/Holding.ts`
- `src/controllers/portfolioController.ts`
- `src/routes/portfolioRoutes.ts`
- asociaciones en `src/models/index.ts`

## Lineamientos
- `portfolioValue = sum(shares * sharePrice)`.
- `netWorth = user.balance + portfolioValue`.
- No crear historial ni transacciones.
- No crear services si el controlador sigue corto y legible.
- Incluir empresas privadas del usuario en portfolio, porque igual son parte de su patrimonio.

## Validacion
- Usuario sin holdings retorna lista vacia y patrimonio igual a su balance.
- Usuario con holdings retorna valor calculado desde `marketCap / totalShares`.

## Resultado esperado
Frontend puede mostrar saldo, acciones, valor de cartera y patrimonio total.
