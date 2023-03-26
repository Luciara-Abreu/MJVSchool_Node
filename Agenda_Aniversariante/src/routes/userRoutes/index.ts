import { Router } from 'express'
import route from './userRoutes'

const UserRoute = Router()
UserRoute.use('/Users', route)

export default UserRoute
