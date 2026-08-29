# Fase 2: Auth y usuarios

## Modelo `User`

- `id`: UUID
- `username`: string unico
- `password`: string hasheado
- `balance`: integer, default `10000`

## Endpoints

### `POST /api/login`

Login con auto-registro.

```json
{
  "username": "santiago",
  "password": "123456"
}
```

### `GET /api/me`

Retorna usuario autenticado sin password.

### `PATCH /api/me`

Actualiza `username` y/o `password`.

```json
{
  "username": "santi_dcc",
  "password": "nueva-clave"
}
```

### `DELETE /api/me`

Elimina la cuenta autenticada. Tambien elimina sus holdings y deja sus empresas creadas sin `creatorId`.

## Validaciones

- `username` y `password` son requeridos en login.
- JWT incluye solo `id` y `username`.
- Las respuestas nunca incluyen password.
