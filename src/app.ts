import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import rateLimiter from './middlewares/rateLimiter';

const app = express();

app.set('trust proxy', 1);
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.redirect('/api-docs');
});

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'T1 2026-2 API Docs',
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
);

// ponytail: in-memory limiter, Redis-backed store if multiple production instances need shared quotas.
app.use('/api', rateLimiter, routes);
app.use(errorHandler);

export default app;
