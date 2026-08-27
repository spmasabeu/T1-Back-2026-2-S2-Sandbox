# Fase 6: Rankings, Swagger y cierre MVP

## Objetivo
Agregar rankings simples, documentar API en Swagger y cerrar el MVP con validacion end-to-end.

## Endpoints

### `GET /api/rankings/users`
Retorna usuarios ordenados por patrimonio total.

Patrimonio:

```ts
netWorth = balance + sum(holding.shares * sharePrice)
```

Respuesta sugerida:

```json
{
  "data": [
    {
      "id": "uuid",
      "username": "santiago",
      "balance": 97500,
      "portfolioValue": 3000,
      "netWorth": 100500
    }
  ]
}
```

### `GET /api/rankings/companies`
Retorna empresas publicas ordenadas por `marketCap`.

Respuesta sugerida:

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "DCC Mining",
      "symbol": "DCCM",
      "marketCap": 100000,
      "sharePrice": 1000
    }
  ]
}
```

## Swagger
Documentar:
- auth
- schemas principales
- errores comunes
- ejemplos de request/response para operaciones de mercado

Mantener ejemplos cortos. Swagger debe servir como guia para estudiantes, no como documento legal.

## Validacion end-to-end
Probar manualmente o con un script minimo:
1. Login usuario A.
2. Login usuario B.
3. Usuario A crea empresa privada.
4. Usuario A publica empresa.
5. Usuario B compra acciones.
6. Usuario B dona a la empresa.
7. Usuario A y B consultan portfolio.
8. Rankings reflejan patrimonio y market caps actualizados.

## Checklist de cierre
- `npm run build` pasa.
- `npm run dev` levanta servidor.
- `.env.example` tiene variables necesarias.
- Swagger disponible en `/api-docs`.
- No hay endpoints sin auth cuando modifican dinero, acciones o empresas privadas.
- No se expone `password`.
- Seed no borra empresas de usuarios.
- README explica instalacion, variables, scripts y URL de Swagger.

## Fuera del MVP
- Historial de transacciones.
- Historial de precios.
- Variacion aleatoria por cron.
- WebSockets.
- Admin panel.
- Matching entre usuarios.

## Resultado esperado
Backend minimo, centralizado, desplegable en Render y suficientemente dinamico para construir frontend de mercado ficticio.
