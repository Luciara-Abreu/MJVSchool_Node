import { Router } from 'express';
import ProductsRouter from './products.route';
import AdmRouter from './adm.route';



const router = Router()

router.use('/products', ProductsRouter)
router.use('/adm', AdmRouter)

export default router


