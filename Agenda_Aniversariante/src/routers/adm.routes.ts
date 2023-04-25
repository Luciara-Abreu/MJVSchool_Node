import { Request, Response, Router } from 'express'
import admService from '../sercive/adm.service'
import { authorizationMiddleware } from 'src/middlewares/authorization.middleware'
import resetPasswordAdmService from 'src/sercive/reset.password.adm.service'

const admRoute = Router()

//listar todos
admRoute.get('/ListAll', authorizationMiddleware, async (req: Request, res: Response) => {
  try {
    const listAdm = await admService.getAll()
    res.status(200).send(listAdm)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})
//TALKNTALK ==> phillipe@talkntalk.com.br
//listar um
admRoute.get('/listOne/:id', authorizationMiddleware, async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const adm = await admService.getOne(id)
    res.status(200).send(adm)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//add adm
admRoute.post('/createAdm', authorizationMiddleware, async (req: Request, res: Response) => {
  try {
    await admService.create(req.body.name, req.body.email, req.body)
    res.status(200).send({ message: 'Administrador adicionado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar
admRoute.patch('/update/:id', authorizationMiddleware, async (req: Request, res: Response) => {
  try {
    await admService.update(req.params.id, req.body.name, req.body.email, req.body)
    res.status(200).send({ message: 'Administrador atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//deletar
admRoute.delete('/remove/:id', authorizationMiddleware, async (req: Request, res: Response) => {
  try {
    await admService.remove(req.params.id)
    res.status(200).send({ message: 'Administrador removido com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//Logar
admRoute.post('/authorization', async (req: Request, res: Response) => {
  try {
    const token = await admService.authorization(req.body.email, req.body.password)
    res.status(200).send({ token })
  } catch (error: any) {
    res.status(401).send({ message: error.message })
  }
})

//envio de email para recuperar senha
admRoute.post('/SendTokenResetPassword', async (req: Request, res: Response) => {
  const { email } = req.body
  try {
    await resetPasswordAdmService.SendEmail(email)
    return res.status(200).json('Mensagem enviada com Sucesso!')
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//reset da senha senha
admRoute.post('/resetPassword', async (req: Request, res: Response) => {
  try {
    await resetPasswordAdmService.ressetPassword(req.body.token, req.body.password, req.body.passwordConfirmation )
    res.status(200).send({ message: 'Senha alterada com sucesso!' })
  } catch (error: any) {
    res.status(401).send({ message: error.message })
  }
})



export default admRoute
