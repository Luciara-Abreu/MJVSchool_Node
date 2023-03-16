import express from 'express'
import RouteUser from './routes/userRoutes'

const StartServer = () => {
  const porta = 8080

  const app = express()
  app.use(express.json())
  app.use(RouteUser)

  app.listen(porta, () => {
    console.log('')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log(`✨ 🏆 Server started on port  🏆`, porta, ` 🏆   ✨`)
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log('')
  })
}

export default StartServer
