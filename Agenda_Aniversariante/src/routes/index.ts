import { Router } from 'express'
import userRoute from './user.routes'
import admRoute from './adm.routes'
import postRoute from './post.routes'

const route = Router()
route.use('/user', userRoute)
route.use('/post', postRoute)
route.use('/adm', admRoute)

export default route
