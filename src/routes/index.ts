import { Router } from 'express';
import authRoutes from './authRoutes';
import companyRoutes from './companyRoutes';
import portfolioRoutes from './portfolioRoutes';
import rankingRoutes from './rankingRoutes';

const router = Router();

router.use('/', authRoutes);
router.use('/companies', companyRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/rankings', rankingRoutes);

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Servicio disponible
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Health'
 */
router.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

export default router;
