# Fase 1: Base TypeScript y despliegue minimo

## Objetivo
Crear la base del proyecto TypeScript + Express reutilizando la estructura de la tarea anterior, sin cambiar todavia la logica de negocio.

## Roadmap completo
1. Fase 1: Base TypeScript y despliegue minimo
2. Fase 2: Auth y modelo de usuario
3. Fase 3: Empresas y seed inicial
4. Fase 4: Holdings y portfolio
5. Fase 5: Operaciones de mercado
6. Fase 6: Rankings, Swagger y cierre MVP

## Regla de diseño
- Menos LOC es mejor si mantiene claridad.
- Reusar la estructura de `T1-Back-2026-1-S1`.
- No agregar historial, timer, precios aleatorios ni matching entre usuarios en el MVP.
- Cada fase debe dejar el backend en un estado ejecutable o muy cercano a ejecutable.
- Los endpoints deben responder JSON consistente y ser faciles de probar en Swagger.

## Modelo MVP
- `User`: usuario autenticado con saldo.
- `Company`: empresa publica o privada con `marketCap`, acciones totales y acciones disponibles.
- `Holding`: acciones que un usuario posee en una empresa.

## Endpoints MVP
- `POST /api/login`
- `GET /api/me`
- `GET /api/companies`
- `GET /api/companies/:id`
- `POST /api/companies`
- `POST /api/companies/:id/publish`
- `POST /api/companies/:id/buy`
- `POST /api/companies/:id/sell`
- `POST /api/companies/:id/donate`
- `GET /api/portfolio`
- `GET /api/rankings/users`
- `GET /api/rankings/companies`

## Criterio de terminado del MVP
- Backend corre local con `npm run dev`.
- Backend compila con `npm run build`.
- Seed carga empresas publicas iniciales sin borrar empresas creadas por usuarios.
- Flujo completo probado: login, listar empresas, crear privada, publicar, comprar, vender, donar, ver portfolio, ver rankings.
- Swagger documenta todos los endpoints necesarios para estudiantes.

## Contexto
La referencia usa Express, Sequelize, Postgres, JWT, Swagger y un `index.js` que autentica la BD, sincroniza modelos y levanta el servidor. La nueva version debe mantener esa familiaridad, pero en TypeScript.

## Archivos esperados
- `package.json`
- `tsconfig.json`
- `.env.example`
- `src/app.ts`
- `src/server.ts`
- `src/config/database.ts`
- `src/config/swagger.ts`
- `src/middlewares/errorHandler.ts`
- `src/routes/index.ts`

## Tareas
- Inicializar `package.json` con scripts minimos:
  - `dev`
  - `build`
  - `start`
- Instalar dependencias equivalentes a la tarea anterior:
  - runtime: `express`, `cors`, `dotenv`, `sequelize`, `pg`, `pg-hstore`, `bcrypt`, `jsonwebtoken`, `swagger-jsdoc`, `swagger-ui-express`
  - dev: `typescript`, `tsx`, tipos de Express/CORS/JWT/bcrypt/Node
- Configurar `tsconfig.json` simple, CommonJS o NodeNext segun menor friccion con Sequelize.
- Crear `app.ts` con:
  - `cors`
  - `express.json`
  - `/api-docs`
  - `/api`
  - error handler global
- Crear `server.ts` con:
  - `dotenv.config()`
  - conexion Sequelize
  - `sequelize.sync({ alter: true })`
  - `app.listen`

## Lineamientos
- Evitar alias de paths en TypeScript; imports relativos son suficientes.
- Evitar capas `services` en esta fase.
- No agregar tests aun si todavia no hay logica de negocio.
- Mantener mensajes de consola claros para Render y desarrollo local.

## Validacion
- `npm run build`
- `npm run dev`
- `GET /api/health` responde `{ "status": "ok" }`.

## Resultado esperado
Un backend vacio pero desplegable, con TypeScript funcionando y estructura lista para agregar modelos.
