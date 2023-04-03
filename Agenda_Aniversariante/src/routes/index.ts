import { Router } from 'express'
import userRoute from './userRoutes/user.routes'
import postRoute from './postRoutes/post.routes'
import admRoute from './admRoutes/adm.routes'

const route = Router()
route.use('/Users', userRoute)
route.use('/Posts', postRoute)
route.use('/Adms', admRoute)

export default route
