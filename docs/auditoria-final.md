# Auditoria Final

## Estado

API alineada a la especificacion nueva: usuarios compran y venden empresas completas.

| Area | Estado |
| --- | --- |
| Auth | login/autoregistro, `/me`, patch y delete |
| Usuarios | balance inicial `10000`, password hasheada |
| Empresas | crear publica/privada, patch, delete, publish |
| Mercado | comprar, vender y donar empresas |
| Portfolio | balance, empresas, valor de cartera, patrimonio |
| Rankings | usuarios por patrimonio, empresas por `marketCap` |
| Reset | cada 1h elimina holdings, resetea balances y resembrar valores base |
| Docs | README, ERD, flujo API, Swagger y roadmap actualizados |

## Reglas Vigentes

- Usuario nuevo parte con `10000`.
- Empresa seed recibe `marketCap` aleatorio entre `1000` y `5000`.
- Empresa creada por usuario recibe `marketCap` aleatorio entre `1000` y `5000`.
- Empresa creada puede nacer publica o privada.
- Empresa privada propia puede publicarse despues.
- Comprar empresa descuenta `marketCap` y crea un holding.
- Vender empresa elimina el holding y devuelve `marketCap`.
- Donar descuenta balance y suma al `marketCap`.
- Reset horario no borra usuarios.

## Validacion

La suite esperada es:

```bash
npm run check
```

Incluye:

- build TypeScript
- ranking self-check
- API self-check
- rate-limit self-check
