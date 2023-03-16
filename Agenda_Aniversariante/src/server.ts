import express from 'express'

const StartServer = () => {
  const app = express()
  app.use(express.json())


  app.listen(4000, () => {
    console.log('')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    console.log(`✨ 🏆 Server started on port  🏆  4000 🏆                 ✨`)
    console.log('✨ -----------------------------------------------        ✨')
  })
}

export default StartServer
