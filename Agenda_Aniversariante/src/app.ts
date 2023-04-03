import express from 'express'
import cors from 'cors'
import route from './routes'

const StartServer = () => {
  const porta = 3004

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(route)

  app.listen(porta, () => {
    console.log('')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log(`✨ 🏆 Server started on port  🏆`, porta, ` 🏆   ✨`)
  })
}

export default StartServer
