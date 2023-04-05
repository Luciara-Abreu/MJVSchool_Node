import express from 'express'
import cors from 'cors'
import router from './routes/index'
import conectionDb from './config/database'
import * as dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

const port = process.env.PORT_SERVICE

conectionDb
  .then(() => {
    console.log('')
    console.log('*******************************************')
    console.log('* Banco de dados conectado                *')
    app.listen(port, () => {
      console.log('* Aplication online in port ', port, '        *')
      console.log('*******************************************')
      console.log('')
    })
  })
  .catch(err => console.log(err))
