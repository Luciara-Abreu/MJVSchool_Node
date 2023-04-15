import { Request, Response, Router } from 'express'
import admService from '../sercive/adm.service'

const admRoute = Router()

console.log('✨ ******* Rotas de Adm ******************* ✨')

//listar todos
admRoute.get('/ListAll', async (req: Request, res: Response) => {
  try {
    const listAdm = await admService.getAll()
    res.status(200).send(listAdm)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//listar um
admRoute.get('/listOne/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const adm = await admService.getOne(id)
    res.status(200).send(adm)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//add adm
admRoute.post('/createAdm', async (req: Request, res: Response) => {
  try {
    await admService.create(req.body.name,  req.body.email, req.body)
    res.status(200).send({ message: 'Administrador adicionado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar
admRoute.patch('/update/:id', async (req: Request, res: Response) => {
  try {
    await admService.update(req.params.id, req.body.name, req.body.email, req.body)
    res.status(200).send({ message: 'Administrador atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//deletar
admRoute.delete('/remove/:id', async (req: Request, res: Response) => {
  try {
    await admService.remove(req.params.id)
    res.status(200).send({ message: 'Administrador removido com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default admRoute
