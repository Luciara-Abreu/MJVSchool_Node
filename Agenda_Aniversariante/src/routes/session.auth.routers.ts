import { Request, Response, Router } from 'express'
import sessionService from '../sercive/session.service'

const sessionRoute = Router()
console.log('✨ ******* Rotas Session Auth ************* ✨')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

sessionRoute.post('/authenticate', async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const adm = await sessionService.execute({ email, password })
    res.status(200).send({ message: 'Administrador logado!' , adm})
    //res.status(200).send(adm, { message: })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default sessionRoute