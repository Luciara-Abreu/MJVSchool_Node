import { Router } from 'express'
import userRoute from './userRoutes/userRoutes'
import postRoute from './postRoutes/postRoutes'
import admRoute from './admRoutes/admRoutes'



const route = Router()
route.use('/Users', userRoute)
route.use('/Posts', postRoute)
route.use('/Adms', admRoute)

export default route
