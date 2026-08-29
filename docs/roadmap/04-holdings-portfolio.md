# Fase 4: Holdings y portfolio

## Modelo `Holding`

- `id`: UUID
- `userId`: UUID requerido
- `companyId`: UUID requerido

Un usuario puede tener una empresa una sola vez. La unicidad se define con indice compuesto `userId` + `companyId`.

## `GET /api/portfolio`

Retorna balance, empresas compradas, valor de cartera y patrimonio total.

```json
{
  "balance": 6800,
  "companies": [
    {
      "company": {
        "id": "11111111-1111-4111-8111-111111111111",
        "name": "DCC Robotics",
        "symbol": "DCCR",
        "marketCap": 3200
      },
      "value": 3200
    }
  ],
  "portfolioValue": 3200,
  "netWorth": 10000
}
```

## Reglas

- `portfolioValue = sum(company.marketCap)`.
- `netWorth = user.balance + portfolioValue`.
- El reset horario elimina todos los holdings.
