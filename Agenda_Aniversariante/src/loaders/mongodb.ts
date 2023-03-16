import mongoose from 'mongoose'
import express from 'express'


const connectionDB = () => {
const url = "mongodb://127.0.0.1:27017/"

const app = express()
app.use(express.json())
const porta = 4040

mongoose.connect(url, {})
.then(() => {
  return app.listen(porta, () => {
    console.log(`✨ 🏆 database connected.     🏆 `, porta, '🏆                 ✨')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log('')
  })
})
.catch(err => console.log(err))
}

export default connectionDB
//.then((conn) => console.log(conn))

/*

   .then(() => {
        return app.listen(process.env.PORT, () => {
          console.log(`✨ 🏆 Connection initialized with database. 🏆 `, process.env.PORT, '🏆   ✨')
          console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
          console.log('')
        })
      })
*/
