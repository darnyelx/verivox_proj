import express from 'express';
import { compareTariffs  } from '../controllers/productController';

const router = express.Router();

router.post('/products/tariff/compare', compareTariffs);

export default router;
