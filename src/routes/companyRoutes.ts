import { Router } from 'express';
import {
  buyShares,
  createCompany,
  donateToCompany,
  getCompanies,
  getCompanyById,
  publishCompany,
  sellShares,
} from '../controllers/companyController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

/**
 * @openapi
 * /companies:
 *   get:
 *     summary: Listar empresas
 *     tags:
 *       - Companies
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: sector
 *         schema:
 *           type: string
 *       - in: query
 *         name: isPublic
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Empresas paginadas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedCompanies'
 */
router.get('/', getCompanies);

/**
 * @openapi
 * /companies:
 *   post:
 *     summary: Crear empresa privada
 *     tags:
 *       - Companies
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCompanyInput'
 *     responses:
 *       201:
 *         description: Empresa privada creada
 *       400:
 *         description: Saldo insuficiente
 *       422:
 *         description: Datos inválidos
 */
router.post('/', authMiddleware, createCompany);

/**
 * @openapi
 * /companies/{id}:
 *   get:
 *     summary: Obtener empresa por ID
 *     tags:
 *       - Companies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: Empresa no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', getCompanyById);

/**
 * @openapi
 * /companies/{id}/publish:
 *   post:
 *     summary: Publicar empresa privada
 *     tags:
 *       - Companies
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PublishCompanyInput'
 *           example:
 *             sharesToOpen: 49
 *     responses:
 *       200:
 *         description: Empresa publicada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 company:
 *                   $ref: '#/components/schemas/Company'
 *                 openedShares:
 *                   type: integer
 *                   example: 49
 *             example:
 *               company:
 *                 id: 11111111-1111-4111-8111-111111111111
 *                 name: DCC Robotics
 *                 symbol: DCCR
 *                 marketCap: 5000
 *                 totalShares: 100
 *                 availableShares: 49
 *                 isPublic: true
 *                 sharePrice: 50
 *               openedShares: 49
 *       403:
 *         description: Usuario no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       422:
 *         description: Datos inválidos
 */
router.post('/:id/publish', authMiddleware, publishCompany);

/**
 * @openapi
 * /companies/{id}/buy:
 *   post:
 *     summary: Comprar acciones
 *     tags:
 *       - Companies
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SharesInput'
 *           example:
 *             shares: 5
 *     responses:
 *       200:
 *         description: Compra realizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MarketOperationResponse'
 *             example:
 *               company:
 *                 id: 11111111-1111-4111-8111-111111111111
 *                 name: DCC Robotics
 *                 symbol: DCCR
 *                 sharePrice: 50
 *               shares: 5
 *               totalPrice: 250
 *               balance: 99750
 *       400:
 *         description: Saldo o acciones insuficientes
 *       404:
 *         description: Empresa no encontrada
 *       422:
 *         description: Datos inválidos
 */
router.post('/:id/buy', authMiddleware, buyShares);

/**
 * @openapi
 * /companies/{id}/sell:
 *   post:
 *     summary: Vender acciones
 *     tags:
 *       - Companies
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SharesInput'
 *           example:
 *             shares: 5
 *     responses:
 *       200:
 *         description: Venta realizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MarketOperationResponse'
 *             example:
 *               company:
 *                 id: 11111111-1111-4111-8111-111111111111
 *                 name: DCC Robotics
 *                 symbol: DCCR
 *                 sharePrice: 50
 *               shares: 5
 *               totalPrice: 250
 *               balance: 100000
 *       400:
 *         description: Acciones insuficientes
 *       404:
 *         description: Empresa no encontrada
 *       422:
 *         description: Datos inválidos
 */
router.post('/:id/sell', authMiddleware, sellShares);

/**
 * @openapi
 * /companies/{id}/donate:
 *   post:
 *     summary: Donar a una empresa
 *     tags:
 *       - Companies
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DonateInput'
 *           example:
 *             amount: 1000
 *     responses:
 *       200:
 *         description: Donación realizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 company:
 *                   $ref: '#/components/schemas/Company'
 *                 amount:
 *                   type: integer
 *                   example: 1000
 *                 balance:
 *                   type: integer
 *                   example: 99000
 *             example:
 *               company:
 *                 id: 11111111-1111-4111-8111-111111111111
 *                 name: DCC Robotics
 *                 symbol: DCCR
 *                 marketCap: 6000
 *                 sharePrice: 60
 *               amount: 1000
 *               balance: 99000
 *       400:
 *         description: Saldo insuficiente
 *       404:
 *         description: Empresa no encontrada
 *       422:
 *         description: Datos inválidos
 */
router.post('/:id/donate', authMiddleware, donateToCompany);

export default router;
