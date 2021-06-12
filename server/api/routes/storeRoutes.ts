import { Router } from 'express';
import { getCategories, getProducts } from '../controllers/storeController';

const router = Router();

router.get('/categories', getCategories);
router.get('/categories/:categoryId', getCategories);
router.get('/categories/:categoryId/products', getProducts);
router.get('/products', getProducts);
router.get('/products/:productId', getProducts);

export default router;
