import express from 'express'
import admController from '../../controllers/AdmController'

const admRoute = express()

console.log('✨ ********** Rotas de Administradores **** ✨')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('')

admRoute.post('/AddAdm', admController.createAdm)
admRoute.get('/ListAdms', admController.listAllAdms)
admRoute.get('/ListOneAdm/:id', admController.listOneAdm)
admRoute.patch('/UpdateAdm/:id', admController.updateAdm)
admRoute.delete('/RemoveAdm/:id', admController.delete)

export default admRoute
