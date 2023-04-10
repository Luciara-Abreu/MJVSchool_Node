import { Router } from 'express'
import userRoute from './user.routes'
import admRoute from './adm.routes'
import postRoute from './post.routes'
import passwordRoute from './password.routes'
import sessionRoute from './session.auth.routers'


const route = Router()
route.use('/user', userRoute)
route.use('/post', postRoute)
route.use('/adm', admRoute)
route.use('/password', passwordRoute)
route.use('/', sessionRoute)

export default route
