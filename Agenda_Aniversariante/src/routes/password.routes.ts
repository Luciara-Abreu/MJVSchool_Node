import { Request, Response, Router } from 'express'
import admService from '../sercive/adm.service'
import sendForgottenPasswordService from '../sercive/send.forgotten.password.service'

const passwordRoute = Router()
console.log('✨ ******* Rotas de Reset Password ******** ✨')

// forgotten password = Senha esquecida / Esqueci minha senha // Esqueceu a senha

passwordRoute.post('/forgot', async (req: Request, res: Response) => {
  try {
    await sendForgottenPasswordService.create(req.body.email)
    res.status(200).send({ message: 'Email enviado para recuperação de senha!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default passwordRoute
