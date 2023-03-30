import { Router } from 'express';
import ProductsRouter from './productsRoutes';


const router = Router()

router.use('/products', ProductsRouter)

export default router


