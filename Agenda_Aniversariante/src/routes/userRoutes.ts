import express from 'express'
import UserController from '../controllers/UserController'

const RouteUser = express()
const userController = new UserController()

console.log('')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('✨ ********** Rotas de User *************** ✨')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('')

RouteUser.post('/AddUser', userController.createUser)
RouteUser.get('/ListAllAnivers', userController.listAllUsers)

export default RouteUser
