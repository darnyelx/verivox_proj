import express from 'express';
import { compareTariffs  } from '../controllers/tariffController';

const router = express.Router();
/**
 * @swagger
 * /api/tariff:
 *   compare:
 *     summary: Compare tariffs from service provider
 *     description: Returns a list of calculated consumption cost
 *     responses:
 *       200:
 *         description: A list of consumption cost
 */

router.post('/tariff/compare', compareTariffs);

export default router;
