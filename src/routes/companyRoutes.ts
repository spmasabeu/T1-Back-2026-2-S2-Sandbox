import { Router } from 'express';
import {
  buyCompany,
  createCompany,
  deleteCompany,
  donateToCompany,
  getCompanies,
  getCompanyById,
  publishCompany,
  sellCompany,
  updateCompany,
} from '../controllers/companyController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

/**
 * @openapi
 * /companies:
 *   get:
 *     summary: Listar empresas
 *     tags: [Companies]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 10 }
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *       - in: query
 *         name: sector
 *         schema: { type: string }
 *       - in: query
 *         name: isPublic
 *         schema: { type: boolean }
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
 *     summary: Crear empresa
 *     tags: [Companies]
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
 *         description: Empresa creada
 *       422:
 *         description: Datos inválidos
 */
router.post('/', authMiddleware, createCompany);

/**
 * @openapi
 * /companies/{id}:
 *   get:
 *     summary: Obtener empresa por ID
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: Empresa no encontrada
 */
router.get('/:id', getCompanyById);

/**
 * @openapi
 * /companies/{id}:
 *   patch:
 *     summary: Actualizar empresa propia
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCompanyInput'
 *     responses:
 *       200:
 *         description: Empresa actualizada
 *       403:
 *         description: Usuario no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       422:
 *         description: Datos inválidos
 */
router.patch('/:id', authMiddleware, updateCompany);

/**
 * @openapi
 * /companies/{id}:
 *   delete:
 *     summary: Eliminar empresa propia
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       204:
 *         description: Empresa eliminada
 *       403:
 *         description: Usuario no autorizado
 *       404:
 *         description: Empresa no encontrada
 */
router.delete('/:id', authMiddleware, deleteCompany);

/**
 * @openapi
 * /companies/{id}/publish:
 *   post:
 *     summary: Publicar empresa privada
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Empresa publicada
 *       403:
 *         description: Usuario no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       422:
 *         description: Empresa ya pública
 */
router.post('/:id/publish', authMiddleware, publishCompany);

/**
 * @openapi
 * /companies/{id}/buy:
 *   post:
 *     summary: Comprar empresa
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Compra realizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompanyOperationResponse'
 *       400:
 *         description: Saldo insuficiente o empresa ya comprada
 *       403:
 *         description: Empresa no pública
 *       404:
 *         description: Empresa no encontrada
 */
router.post('/:id/buy', authMiddleware, buyCompany);

/**
 * @openapi
 * /companies/{id}/sell:
 *   post:
 *     summary: Vender empresa
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     responses:
 *       200:
 *         description: Venta realizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompanyOperationResponse'
 *       400:
 *         description: Empresa no comprada
 *       404:
 *         description: Empresa no encontrada
 */
router.post('/:id/sell', authMiddleware, sellCompany);

/**
 * @openapi
 * /companies/{id}/donate:
 *   post:
 *     summary: Donar a una empresa
 *     tags: [Companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string, format: uuid }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DonateInput'
 *     responses:
 *       200:
 *         description: Donación realizada
 *       400:
 *         description: Saldo insuficiente
 *       403:
 *         description: Empresa no pública
 *       404:
 *         description: Empresa no encontrada
 *       422:
 *         description: Datos inválidos
 */
router.post('/:id/donate', authMiddleware, donateToCompany);

export default router;
