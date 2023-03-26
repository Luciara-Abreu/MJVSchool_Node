import express from 'express'
import UserController from '../../controllers/UserController'

const route = express()
const userController = new UserController()

console.log('')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('✨ ********** Rotas de User *************** ✨')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('')

route.post('/AddUser', userController.createUser)                                                   
route.get('/ListAllUsers', userController.listAllUsers)

export default route
