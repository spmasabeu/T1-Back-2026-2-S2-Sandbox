import swaggerJsdoc from 'swagger-jsdoc';

const isProduction = process.env.NODE_ENV === 'production';
const localUrl = `http://localhost:${process.env.PORT || 3000}/api`;
const renderUrl = process.env.RENDER_EXTERNAL_URL ? `${process.env.RENDER_EXTERNAL_URL.replace(/\/$/, '')}/api` : undefined;
const productionUrl = process.env.BACKEND_URL || renderUrl || 'https://example-render.com/api';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'T1 2026-2 API',
      version: '1.0.0',
      description:
        'Backend base en TypeScript para el proyecto de la T1 2026-2.',
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
            name: { type: 'string', example: 'Andes Solar Labs' },
            symbol: { type: 'string', example: 'ASL' },
            description: { type: 'string', example: 'Empresa educativa del sector Energia.' },
            sector: { type: 'string', example: 'Energia' },
            logoUrl: { type: 'string', nullable: true },
            marketCap: { type: 'integer', example: 900000000 },
            totalShares: { type: 'integer', example: 900000 },
            availableShares: { type: 'integer', example: 900000 },
            isPublic: { type: 'boolean', example: true },
            creatorId: { type: 'string', format: 'uuid', nullable: true },
            sharePrice: { type: 'integer', example: 1000 },
          },
        },
        CreateCompanyInput: {
          type: 'object',
          required: ['name', 'symbol', 'description', 'sector', 'initialCapital', 'totalShares'],
          properties: {
            name: { type: 'string', example: 'DCC Robotics' },
            symbol: { type: 'string', example: 'DCCR' },
            description: { type: 'string', example: 'Empresa ficticia de robots educativos.' },
            sector: { type: 'string', example: 'Tecnologia' },
            logoUrl: { type: 'string', nullable: true, example: 'https://example.com/logo.png' },
            initialCapital: { type: 'integer', example: 5000 },
            totalShares: { type: 'integer', example: 100 },
          },
        },
        PublishCompanyInput: {
          type: 'object',
          properties: {
            sharesToOpen: { type: 'integer', example: 49 },
          },
        },
        SharesInput: {
          type: 'object',
          required: ['shares'],
          properties: {
            shares: { type: 'integer', example: 5 },
          },
        },
        DonateInput: {
          type: 'object',
          required: ['amount'],
          properties: {
            amount: { type: 'integer', example: 1000 },
          },
        },
        MarketOperationResponse: {
          type: 'object',
          properties: {
            company: { $ref: '#/components/schemas/Company' },
            shares: { type: 'integer', example: 5 },
            totalPrice: { type: 'integer', example: 5000 },
            balance: { type: 'integer', example: 5000 },
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
                totalItems: { type: 'integer', example: 12 },
              },
            },
          },
        },
        PortfolioHolding: {
          type: 'object',
          properties: {
            company: {
              type: 'object',
              properties: {
                id: { type: 'string', format: 'uuid' },
                name: { type: 'string', example: 'DCC Mining' },
                symbol: { type: 'string', example: 'DCCM' },
                sharePrice: { type: 'integer', example: 100 },
              },
            },
            shares: { type: 'integer', example: 10 },
            value: { type: 'integer', example: 1000 },
          },
        },
        Portfolio: {
          type: 'object',
          properties: {
            balance: { type: 'integer', example: 10000 },
            holdings: {
              type: 'array',
              items: { $ref: '#/components/schemas/PortfolioHolding' },
            },
            portfolioValue: { type: 'integer', example: 1000 },
            netWorth: { type: 'integer', example: 11000 },
          },
        },
        UserRankingItem: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            username: { type: 'string', example: 'santiago' },
            balance: { type: 'integer', example: 7500 },
            portfolioValue: { type: 'integer', example: 3000 },
            netWorth: { type: 'integer', example: 10500 },
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
            marketCap: { type: 'integer', example: 100000 },
            sharePrice: { type: 'integer', example: 1000 },
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
