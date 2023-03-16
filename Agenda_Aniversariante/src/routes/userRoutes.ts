import express from 'express'
import UserController from '../controllers/UserController'

const RouteUser = express()
const userController = new UserController()

console.log('')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('------------------------------------------------------------')
console.log('********************** Rotas de User ***********************')

console.log('********** Rotas de User ***************')
RouteUser.post('/AddUser', userController.createUser)

export default RouteUser
