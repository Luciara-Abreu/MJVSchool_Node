import express from 'express'
import cors from 'cors'
import router from './routers'
import connection from './config/database'

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

const port = 3000

connection
  .then(() => {
    console.log('')
    console.log('*******************************************')
    console.log('* Banco de dados conectado                *')
    app.listen(port, () => {
      console.log('* Aplication online in port ', port, '        *')
      console.log('*******************************************')
    })
  })
  .catch(err => console.log(err))
