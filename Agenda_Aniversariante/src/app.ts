import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import route from './routers'
import conectionDb from './config/database'

const StartServer = () => {
  const porta = process.env.PORT_SERVER

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(route)

  conectionDb.then(() => {
    console.log('')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log('✨ 🏆 Banco de dados conectado 🏆           ✨')
    app.listen(porta, () => {
      console.log(`✨ 🏆 Server started on port   🏆`, porta, ` 🏆  ✨`)
      console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    })
  })
}

export default StartServer()
