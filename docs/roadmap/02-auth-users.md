# Fase 2: Auth y modelo de usuario

## Objetivo
Implementar autenticacion igual a la tarea anterior: login con auto-registro, JWT y usuario con saldo inicial.

## Modelo

### User
- `id`: UUID
- `username`: string unico, requerido
- `password`: string requerido, hasheado
- `balance`: integer requerido, default `10000`

## Endpoints

### `POST /api/login`
Body:

```json
{
  "username": "santiago",
  "password": "123456"
}
```

Comportamiento:
- Si el usuario existe, valida password.
- Si no existe, lo crea.
- Retorna usuario sin password y token.

### `GET /api/me`
Headers:

```txt
Authorization: Bearer <token>
```

Retorna usuario autenticado sin password.

## Archivos esperados
- `src/models/User.ts`
- `src/models/index.ts`
- `src/controllers/authController.ts`
- `src/middlewares/authMiddleware.ts`
- `src/routes/authRoutes.ts`
- `src/routes/index.ts`

## Lineamientos
- Copiar el patron de `toSafeObject()` de la tarea anterior.
- El JWT debe incluir solo lo necesario: `id` y `username`.
- Usar `JWT_SECRET` desde `.env`.
- Fallar rapido con `400` si falta username/password.
- Usar `401` para password incorrecta, token ausente, invalido o expirado.

## Validacion
- Login crea usuario nuevo.
- Login con mismo usuario y password correcto retorna token.
- Login con password incorrecto retorna `401`.
- `GET /api/me` funciona con token valido.
- La respuesta nunca expone `password`.

## Resultado esperado
Auth lista para proteger operaciones de mercado.
