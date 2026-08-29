# ERD

```mermaid
erDiagram
  User ||--o{ Holding : owns
  Company ||--o{ Holding : has
  User ||--o{ Company : creates

  User {
    uuid id PK
    string username UK
    string password
    int balance
  }

  Company {
    uuid id PK
    string name
    string symbol UK
    string description
    string sector
    string logoUrl
    int marketCap
    boolean isPublic
    uuid creatorId FK
  }

  Holding {
    uuid id PK
    uuid userId FK
    uuid companyId FK
  }
```

## Relaciones

- `User` crea cero o muchas `Company` mediante `Company.creatorId`.
- `User` posee cero o muchos `Holding`.
- `Company` tiene cero o muchos `Holding`.
- `Holding` representa que un usuario tiene una empresa en su portfolio.
- `Holding` tiene indice unico compuesto en `userId` + `companyId`.
