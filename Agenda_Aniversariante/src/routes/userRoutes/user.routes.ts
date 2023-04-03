import express from 'express'
import userController from '../../controllers/user.controller'

const userRoute = express()

console.log('')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('✨ ********** Rotas de User *************** ✨')


userRoute.post('/AddUser', userController.createUser)
userRoute.get('/ListAllUsers', userController.listAllUsers)
userRoute.get('/ListOne/:id', userController.listOneUser)
userRoute.patch('/Update/:id', userController.updateUser)
userRoute.delete('/Remove/:id', userController.delete)

export default userRoute
