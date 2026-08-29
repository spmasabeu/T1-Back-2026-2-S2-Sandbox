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
| `PATCH` | `/me` | Si | Editar usuario actual |
| `DELETE` | `/me` | Si | Eliminar usuario actual |
| `GET` | `/companies` | No | Mercado/listado |
| `GET` | `/companies/:id` | No | Detalle empresa |
| `POST` | `/companies` | Si | Crear empresa publica o privada |
| `PATCH` | `/companies/:id` | Si | Editar empresa propia |
| `DELETE` | `/companies/:id` | Si | Eliminar empresa propia |
| `POST` | `/companies/:id/publish` | Si | Publicar empresa privada propia |
| `POST` | `/companies/:id/buy` | Si | Comprar empresa |
| `POST` | `/companies/:id/sell` | Si | Vender empresa |
| `POST` | `/companies/:id/donate` | Si | Donar a empresa publica |
| `GET` | `/portfolio` | Si | Balance, empresas y patrimonio |
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
5. Crear empresa con `POST /api/companies`.
6. Si nace privada, publicarla con `POST /api/companies/:id/publish`.
7. Comprar empresa publica con `POST /api/companies/:id/buy`.
8. Vender empresa con `POST /api/companies/:id/sell`.
9. Donar con `POST /api/companies/:id/donate`.

## Requests Principales

Login:

```json
{
  "username": "santiago",
  "password": "123456"
}
```

Editar usuario:

```json
{
  "username": "santi_dcc",
  "password": "nueva-clave"
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
  "isPublic": false
}
```

Editar empresa:

```json
{
  "name": "DCC Robotics Lab",
  "isPublic": true
}
```

Comprar:

```txt
POST /api/companies/:id/buy
```

Vender:

```txt
POST /api/companies/:id/sell
```

Donar:

```json
{
  "amount": 1000
}
```

## Responses Clave

Empresa:

```json
{
  "id": "11111111-1111-4111-8111-111111111111",
  "name": "DCC Robotics",
  "symbol": "DCCR",
  "description": "Empresa ficticia de robots educativos.",
  "sector": "Tecnologia",
  "logoUrl": null,
  "marketCap": 3200,
  "isPublic": true,
  "creatorId": "22222222-2222-4222-8222-222222222222"
}
```

Portfolio:

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

## Reset Horario

Cada 1 hora el backend:

- Elimina todos los holdings.
- Reinicia todos los balances a `10000`.
- Recalcula valores de empresas seed entre `1000` y `5000`.
- Mantiene las cuentas de usuario.

## Codigos De Error

| Codigo | Significado |
| --- | --- |
| `400` | Saldo insuficiente, empresa ya comprada o empresa no comprada |
| `401` | Token ausente, invalido o expirado |
| `403` | Usuario no autorizado o empresa no publica |
| `404` | Empresa no encontrada |
| `422` | Datos invalidos |
| `429` | Rate limit |
