# Flujo API Para Frontend

Base local:

```txt
http://localhost:3000/api
```

Base Render:

```txt
https://TU-SERVICIO.onrender.com/api
```

## Endpoints

| Metodo | Endpoint | Auth | Uso |
| --- | --- | --- | --- |
| `GET` | `/health` | No | Estado API |
| `POST` | `/login` | No | Login o auto-registro |
| `GET` | `/me` | Si | Usuario actual |
| `GET` | `/companies` | No | Mercado/listado |
| `GET` | `/companies/:id` | No | Detalle empresa |
| `POST` | `/companies` | Si | Crear empresa privada |
| `POST` | `/companies/:id/publish` | Si | Publicar empresa propia |
| `POST` | `/companies/:id/buy` | Si | Comprar acciones |
| `POST` | `/companies/:id/sell` | Si | Vender acciones |
| `POST` | `/companies/:id/donate` | Si | Donar a empresa publica |
| `GET` | `/portfolio` | Si | Saldo, holdings y patrimonio |
| `GET` | `/rankings/users` | No | Ranking usuarios |
| `GET` | `/rankings/companies` | No | Ranking empresas |

Auth:

```txt
Authorization: Bearer <token>
```

## Flujo Normal

1. Login/autoregistro con `POST /api/login`.
2. Guardar `token` y `user`.
3. Cargar dashboard con `/me`, `/portfolio`, `/companies`, `/rankings/users`, `/rankings/companies`.
4. Ver detalle con `GET /api/companies/:id`.
5. Crear empresa privada con `POST /api/companies`.
6. Publicarla con `POST /api/companies/:id/publish`.
7. Comprar acciones con `POST /api/companies/:id/buy`.
8. Vender acciones con `POST /api/companies/:id/sell`.
9. Donar con `POST /api/companies/:id/donate`.

## Requests Principales

Login:

```json
{
  "username": "santiago",
  "password": "123456"
}
```

Crear empresa:

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

Publicar:

```json
{
  "sharesToOpen": 49
}
```

Comprar/vender:

```json
{
  "shares": 5
}
```

Donar:

```json
{
  "amount": 1000
}
```

## Features Esperadas En Front

- Login/autoregistro.
- Persistencia de token.
- Vista mercado con busqueda, sector, publico/privado y paginacion.
- Detalle de empresa con precio por accion.
- Crear empresa privada.
- Publicar acciones al mercado.
- Comprar/vender acciones.
- Donar a empresas publicas.
- Portfolio con balance, holdings, valor y patrimonio.
- Rankings de usuarios y empresas.
- Manejo de errores `400`, `401`, `403`, `404`, `422`, `429`.

## Codigos De Error

| Codigo | Significado |
| --- | --- |
| `400` | Saldo o acciones insuficientes |
| `401` | Token ausente, invalido o expirado |
| `403` | Usuario no autorizado o empresa no publica |
| `404` | Empresa no encontrada |
| `422` | Datos invalidos |
| `429` | Rate limit |
