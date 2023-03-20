import mongoose from 'mongoose'
import express from 'express'

const connectionDB = () => {
  const url = 'mongodb://127.0.0.1/'
  //const url = 'mongodb://127.0.0.1:27017/'

  const app = express()
  app.use(express.json())

  const db = mongoose
    .connect(url, {})
    .then(conn => console.log('Status ==> ', conn.STATES))
    .catch(err => console.error.bind(console.log('Error ==>', err)))
 
    return db

}

export default connectionDB

