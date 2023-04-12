import { Router } from 'express'
import studentsRouter from './students.router'

const router = Router()

router.use('/students', studentsRouter)

export default router
