# Fase 5: Operaciones de mercado

## Objetivo
Implementar las acciones principales del MVP: crear empresa privada, publicar empresa, comprar, vender y donar.

## Endpoints

### `POST /api/companies`
Crea empresa privada.

Body:

```json
{
  "name": "DCC Robotics",
  "symbol": "DCCR",
  "description": "Empresa ficticia de robots educativos.",
  "sector": "Tecnologia",
  "logoUrl": "https://example.com/logo.png",
  "initialCapital": 5000,
  "totalShares": 100
}
```

Reglas:
- Requiere auth.
- `initialCapital` se descuenta del balance.
- `marketCap = initialCapital`.
- `isPublic = false`.
- `availableShares = 0`.
- Creador recibe `totalShares` en holding.

### `POST /api/companies/:id/publish`
Hace publica una empresa privada.

Body opcional:

```json
{
  "sharesToOpen": 49
}
```

Reglas:
- Solo creador puede publicar.
- Si no viene `sharesToOpen`, abrir 49% al mercado.
- Restar esas acciones del holding del creador.
- Sumar esas acciones a `availableShares`.
- Marcar `isPublic = true`.

### `POST /api/companies/:id/buy`
Compra acciones disponibles.

Body:

```json
{
  "shares": 5
}
```

Reglas:
- Solo empresas publicas.
- `shares > 0`.
- `shares <= availableShares`.
- Usuario debe tener saldo suficiente.
- Precio total: `shares * sharePrice`.
- Descontar saldo, subir holding, bajar `availableShares`.
- Comprar no cambia `marketCap`.

### `POST /api/companies/:id/sell`
Vende acciones al mercado.

Body:

```json
{
  "shares": 5
}
```

Reglas:
- Solo empresas publicas.
- Usuario debe tener acciones suficientes.
- Precio total: `shares * sharePrice`.
- Subir saldo, bajar holding, subir `availableShares`.
- Vender no cambia `marketCap`.

### `POST /api/companies/:id/donate`
Dona a una empresa publica.

Body:

```json
{
  "amount": 1000
}
```

Reglas:
- Solo empresas publicas.
- `amount > 0`.
- Usuario debe tener saldo suficiente.
- Descontar saldo.
- `marketCap += amount`.
- No entregar acciones.

## Transacciones
Usar `sequelize.transaction()` en todas las operaciones que toquen mas de una tabla:
- crear empresa privada
- publicar
- comprar
- vender
- donar

## Lineamientos
- Usar locks donde sea simple hacerlo, como en la tarea anterior.
- Mantener errores claros:
  - `404` empresa no existe
  - `403` usuario no autorizado
  - `400` saldo/acciones insuficientes
  - `422` datos invalidos
- No permitir vender mas acciones de las que existen.
- No permitir publicar dos veces.

## Validacion
- Crear empresa privada descuenta saldo y crea holding.
- Publicar empresa abre acciones al mercado.
- Comprar baja saldo y `availableShares`.
- Vender sube saldo y `availableShares`.
- Donar sube `marketCap` y sube `sharePrice` calculado.

## Resultado esperado
Loop completo de juego funcionando sin precio aleatorio ni historial.
