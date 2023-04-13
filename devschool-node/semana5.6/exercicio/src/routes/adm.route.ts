import { Request, Response, Router } from 'express'
import admService from '../service/adm.service'

const AdmRouter = Router()

//listar todos
AdmRouter.get('/', async (req: Request, res: Response) => {
  try {
    const list = await admService.getAll()
    res.status(200).send(list)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//listar um
AdmRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const adm = await admService.getOne(id)
    res.status(200).send(adm)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//add Adm
AdmRouter.post('/', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    await admService.create(id, req.body)
    res.status(200).send({ message: 'Administrador adicionado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar
AdmRouter.patch('/update/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    await admService.update(id, req.body)
    res.status(200).send({ message: 'Administrador atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//deletar
AdmRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    await admService.remove(req.params.id)
    res.status(200).send({ message: 'Administrador deletado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

AdmRouter.post('/authorization', async (req: Request, res: Response) => {
  try {
    const token = await admService.authorization(req.body.email, req.body.password)
    res.status(200).send({ token })
  } catch (error: any) {
    res.status(401).send({ message: error.message })
  }
})

export default AdmRouter
