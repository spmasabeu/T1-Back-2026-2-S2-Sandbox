import { Router } from 'express';
import { getCompanyRankings, getUserRankings } from '../controllers/rankingController';

const router = Router();

/**
 * @openapi
 * /rankings/users:
 *   get:
 *     summary: Ranking de usuarios por patrimonio
 *     tags:
 *       - Rankings
 *     responses:
 *       200:
 *         description: Usuarios ordenados por patrimonio descendente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserRankings'
 */
router.get('/users', getUserRankings);

/**
 * @openapi
 * /rankings/companies:
 *   get:
 *     summary: Ranking de empresas públicas
 *     tags:
 *       - Rankings
 *     responses:
 *       200:
 *         description: Empresas públicas ordenadas por marketCap descendente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompanyRankings'
 */
router.get('/companies', getCompanyRankings);

export default router;
