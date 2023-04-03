import express from 'express'
//import admController from '../../controllers/adm.controller' --> dá erro!!
import AdmController from '../../controllers/Adm.controller'


const admRoute = express()

console.log('✨ ********** Rotas de Administradores **** ✨')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('')

admRoute.post('/AddAdm', AdmController.createAdm)
admRoute.get('/ListAdms', AdmController.listAllAdms)
admRoute.get('/ListOneAdm/:id', AdmController.listOneAdm)
admRoute.patch('/UpdateAdm/:id', AdmController.updateAdm)
admRoute.delete('/RemoveAdm/:id', AdmController.delete)

export default admRoute
