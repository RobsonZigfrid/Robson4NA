import { Router } from 'express';
import { getProduct, addProduct } from '../controllers/productController';

const router2 = Router();

router2.get('/product', getProduct);
router2.post('/product', addProduct);

export default router2;
