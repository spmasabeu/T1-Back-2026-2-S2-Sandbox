import swaggerJsdoc from 'swagger-jsdoc';

const isProduction = process.env.NODE_ENV === 'production';
const localUrl = `http://localhost:${process.env.PORT || 3000}/api`;
const renderUrl = process.env.RENDER_EXTERNAL_URL ? `${process.env.RENDER_EXTERNAL_URL.replace(/\/$/, '')}/api` : undefined;
const productionUrl = process.env.BACKEND_URL || renderUrl || 'https://example-render.com/api';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DDCapital API',
      version: '2.0.0',
      description:
        'Backend base de DDCapital para la T1 2026-2. La API usa el prefijo /api; por ejemplo, /login se consume como /api/login. Los usuarios compran y venden empresas completas con un budget inicial de 10000.',
    },
    externalDocs: {
      description: 'ERD base de datos',
      url: 'https://github.com/spmasabeu/T1-Back-2026-2-S2-Sandbox/blob/main/docs/erd.md',
    },
    servers: [
      {
        url: isProduction ? productionUrl : localUrl,
        description: isProduction ? 'Producción (Render)' : 'Local',
      },
      {
        url: isProduction ? localUrl : productionUrl,
        description: isProduction ? 'Local' : 'Producción (Render)',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Health: {
          type: 'object',
          properties: {
            status: { type: 'string', example: 'ok' },
          },
        },
        LoginInput: {
          type: 'object',
          required: ['username', 'password'],
          properties: {
            username: { type: 'string', example: 'santiago' },
            password: { type: 'string', example: '123456' },
          },
        },
        UpdateUserInput: {
          type: 'object',
          properties: {
            username: { type: 'string', example: 'santi_dcc' },
            password: { type: 'string', example: 'nueva-clave' },
          },
        },
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            username: { type: 'string', example: 'santiago' },
            balance: { type: 'integer', example: 10000 },
          },
        },
        Company: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string', example: 'Apple Inc.' },
            symbol: { type: 'string', example: 'AAPL' },
            description: { type: 'string', example: 'Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals.' },
            sector: { type: 'string', example: 'Technology Hardware, Storage & Peripherals' },
            logoUrl: { type: 'string', nullable: true },
            marketCap: { type: 'integer', example: 3200 },
            isPublic: { type: 'boolean', example: true },
            creatorId: { type: 'string', format: 'uuid', nullable: true },
          },
        },
        CreateCompanyInput: {
          type: 'object',
          required: ['name', 'symbol', 'description', 'sector'],
          properties: {
            name: { type: 'string', example: 'DCC Robotics' },
            symbol: { type: 'string', example: 'DCCR' },
            description: { type: 'string', example: 'Empresa ficticia de robots educativos.' },
            sector: { type: 'string', example: 'Tecnologia' },
            logoUrl: { type: 'string', nullable: true, example: 'https://example.com/logo.png' },
            isPublic: { type: 'boolean', example: false },
          },
        },
        UpdateCompanyInput: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'DCC Robotics Lab' },
            symbol: { type: 'string', example: 'DCCL' },
            description: { type: 'string', example: 'Empresa ficticia de robots educativos.' },
            sector: { type: 'string', example: 'Tecnologia' },
            logoUrl: { type: 'string', nullable: true, example: 'https://example.com/logo.png' },
            isPublic: { type: 'boolean', example: true },
          },
        },
        DonateInput: {
          type: 'object',
          required: ['amount'],
          properties: {
            amount: { type: 'integer', example: 1000 },
          },
        },
        CompanyOperationResponse: {
          type: 'object',
          properties: {
            company: { $ref: '#/components/schemas/Company' },
            totalPrice: { type: 'integer', example: 3200 },
            balance: { type: 'integer', example: 6800 },
          },
        },
        PaginatedCompanies: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: { $ref: '#/components/schemas/Company' },
            },
            meta: {
              type: 'object',
              properties: {
                currentPage: { type: 'integer', example: 1 },
                totalPages: { type: 'integer', example: 2 },
                totalItems: { type: 'integer', example: 503 },
              },
            },
          },
        },
        PortfolioCompany: {
          type: 'object',
          properties: {
            company: {
              type: 'object',
              properties: {
                id: { type: 'string', format: 'uuid' },
                name: { type: 'string', example: 'DCC Mining' },
                symbol: { type: 'string', example: 'DCCM' },
                marketCap: { type: 'integer', example: 2400 },
              },
            },
            value: { type: 'integer', example: 2400 },
          },
        },
        Portfolio: {
          type: 'object',
          properties: {
            balance: { type: 'integer', example: 7600 },
            companies: {
              type: 'array',
              items: { $ref: '#/components/schemas/PortfolioCompany' },
            },
            portfolioValue: { type: 'integer', example: 2400 },
            netWorth: { type: 'integer', example: 10000 },
          },
        },
        UserRankingItem: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            username: { type: 'string', example: 'santiago' },
            balance: { type: 'integer', example: 7600 },
            portfolioValue: { type: 'integer', example: 2400 },
            netWorth: { type: 'integer', example: 10000 },
          },
        },
        UserRankings: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: { $ref: '#/components/schemas/UserRankingItem' },
            },
          },
        },
        CompanyRankingItem: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string', example: 'DCC Mining' },
            symbol: { type: 'string', example: 'DCCM' },
            marketCap: { type: 'integer', example: 5000 },
          },
        },
        CompanyRankings: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: { $ref: '#/components/schemas/CompanyRankingItem' },
            },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            user: { $ref: '#/components/schemas/User' },
            token: { type: 'string' },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
