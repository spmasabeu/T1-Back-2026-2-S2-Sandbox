# Fase 6: Rankings, docs y validacion

## `GET /api/rankings/users`

Ordena usuarios por patrimonio descendente.

```txt
netWorth = balance + sum(company.marketCap)
```

Response:

```json
{
  "data": [
    {
      "id": "11111111-1111-4111-8111-111111111111",
      "username": "santiago",
      "balance": 6800,
      "portfolioValue": 3200,
      "netWorth": 10000
    }
  ]
}
```

## `GET /api/rankings/companies`

Retorna empresas publicas ordenadas por `marketCap`.

```json
{
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "DCC Mining",
      "symbol": "DCCM",
      "marketCap": 5000
    }
  ]
}
```

## Validacion

- `npm run build`
- `npm run check:rankings`
- `npm run check:api`
- `npm run check:rate-limit`
- `npm run check`

## Cobertura Esperada

- Login/autoregistro.
- Editar y eliminar usuario.
- Listar empresas.
- Crear empresa publica o privada.
- Publicar empresa privada.
- Comprar empresa.
- Donar a empresa publica.
- Vender empresa.
- Editar y eliminar empresa propia.
- Portfolio.
- Rankings.
- Swagger.
- Health.
