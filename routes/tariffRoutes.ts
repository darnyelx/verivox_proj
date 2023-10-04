/**
 * @swagger
 * /api/products/tariff/compare:
 *   post:
 *     summary: Compare tariffs based on consumption
 *     description: Compare tariffs from service provider based on provided consumption.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               consumption:
 *                 type: number
 *                 description: The consumption value in kWh.
 *                 example: 4500
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                   example: Success
 *                 data:
 *                   type: array
 *                   description: An array of compared tariffs.
 *                   items:
 *                     type: object
 *                     properties:
 *                       tariff_name:
 *                         type: string
 *                         description: The name of the tariff.
 *                         example: Product B
 *                       annual_cost:
 *                         type: string
 *                         description: The annual cost in EUR.
 *                         example: 950 €/year
 *                       id:
 *                         type: integer
 *                         description: The identifier for the tariff.
 *                         example: 1
 */


import express from 'express';
import { compareTariffs  } from '../controllers/tariffController';

const router = express.Router();

router.post('/tariff/compare', compareTariffs);

export default router;
