import { Router } from 'express';
import { getPortfolio } from '../controllers/portfolioController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

/**
 * @openapi
 * /portfolio:
 *   get:
 *     summary: Portfolio del usuario autenticado
 *     tags:
 *       - Portfolio
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Balance, holdings, valor de cartera y patrimonio
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Portfolio'
 *       401:
 *         description: Token ausente, inválido o expirado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', authMiddleware, getPortfolio);

export default router;
