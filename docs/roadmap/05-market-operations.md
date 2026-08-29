# Fase 5: Operaciones de mercado

## `POST /api/companies`

Crea una empresa publica o privada.

```json
{
  "name": "DCC Robotics",
  "symbol": "DCCR",
  "description": "Empresa ficticia de robots educativos.",
  "sector": "Tecnologia",
  "logoUrl": "https://example.com/logo.png",
  "isPublic": false
}
```

Reglas:

- `isPublic` default `false`.
- `marketCap` lo asigna el backend entre `1000` y `5000`.
- Crear empresa no descuenta balance.

## `PATCH /api/companies/:id`

Edita empresa propia.

Campos editables:

- `name`
- `symbol`
- `description`
- `sector`
- `logoUrl`
- `isPublic`

## `DELETE /api/companies/:id`

Elimina empresa propia y sus holdings asociados.

## `POST /api/companies/:id/publish`

Publica empresa privada propia.

Reglas:

- Solo creador puede publicar.
- Falla si ya es publica.

## `POST /api/companies/:id/buy`

Compra una empresa publica.

Reglas:

- Requiere auth.
- Solo empresas publicas.
- Falla si el usuario ya la tiene.
- Falla si el balance es menor al `marketCap`.
- Descuenta `marketCap` del balance.
- Crea un `Holding`.

## `POST /api/companies/:id/sell`

Vende una empresa del portfolio.

Reglas:

- Requiere auth.
- Falla si el usuario no tiene la empresa.
- Elimina el `Holding`.
- Suma `marketCap` al balance.

## `POST /api/companies/:id/donate`

Dona a una empresa publica.

```json
{
  "amount": 1000
}
```

Reglas:

- Requiere auth.
- Solo empresas publicas.
- `amount` debe ser entero positivo.
- Falla si no hay saldo.
- `user.balance -= amount`.
- `company.marketCap += amount`.
