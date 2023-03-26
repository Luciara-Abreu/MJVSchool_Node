import express from 'express'
import cors from 'cors'
import UserRoute from './routes/userRoutes'

const StartServer = () => {
  const porta = 3000

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(UserRoute)

  app.listen(porta, () => {
    console.log('')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log(`✨ 🏆 Server started on port  🏆`, porta, ` 🏆   ✨`)
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log('')
  })
}

export default StartServer
