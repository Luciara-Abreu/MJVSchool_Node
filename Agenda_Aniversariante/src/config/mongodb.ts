import mongoose from 'mongoose'
import express from 'express'

const connectionDB = () => {
  const url = 'mongodb://127.0.0.1/'
  //const url = 'mongodb://127.0.0.1:27017/'

  const app = express()
  app.use(express.json())

  const config = mongoose
    .connect(url, {})
    .then(conn => console.log('Status ==> ', conn.STATES))
    .catch(err => console.log('Error      ==>', err))

  //On Connection
  mongoose.connection.on('connected', () => {
    console.log('Connected to database : ' + config)
  })
  //On Error
  mongoose.connection.on('error', err => {
    console.log('Database error : ' + err)
  })
}

export default connectionDB





