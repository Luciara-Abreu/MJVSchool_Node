import { Request, Response, Router } from 'express'
import studenstsService from '../services/studensts.service'
import { authorizationMiddleware } from '../middlewares/authorization'

const studentsRouter = Router()

//pegar todos os estudantes
studentsRouter.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
  const students = await studenstsService.getAll()
  res.send(students)
})

//trazer apenas um estudante pelo documento
studentsRouter.get('/listOne/:document', authorizationMiddleware, async (req: Request, res: Response) => {
  try {
    const student = await studenstsService.getByDocument(req.params.document)
    return res.status(200).send(student)
  } catch (error: any) {
    return res.status(400).send({ message: error.message })
  }
})

//adicionar um novo estudante
studentsRouter.post('/', authorizationMiddleware, async (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({ message: 'Ops!! Idade minima (18 anos)' })
  }
  try {
    await studenstsService.create(req.body.document, req.body)
    res.status(200).send({ message: 'Estudante add com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar dados de um estudante
studentsRouter.patch('/update/:document', async (req: Request, res: Response) => {
  try {
    await studenstsService.update(req.params.document, req.body.email, req.body)
    res.status(200).send({ message: 'Estudante atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

// deletar um estudante
studentsRouter.delete('/remove/:document', async (req: Request, res: Response) => {
  try {
    await studenstsService.remove(req.params.document)
    res.status(200).send({ message: 'Estudante removido com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//Autenticação
studentsRouter.post('/authentication', async (req: Request, res: Response) => {
  try {
    const token = await studenstsService.authorization(req.body.document, req.body.password)
    res.status(200).send({ token })
  } catch (error: any) {
    res.status(401).send({ message: error.message })
  }
})

export default studentsRouter
