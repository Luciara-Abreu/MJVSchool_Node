import express from 'express'
import HelloController from '../controller/HelloController'


const RouteHello = express()
const helloController = new HelloController()

RouteHello.get('/', helloController.Salutation)


export default RouteHello