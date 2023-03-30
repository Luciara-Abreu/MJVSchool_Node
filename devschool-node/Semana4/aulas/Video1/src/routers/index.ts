import { Router } from 'express'
import studentsRouter from './sstudents.router'

const router = Router()

router.use('/students', studentsRouter)

export default router
