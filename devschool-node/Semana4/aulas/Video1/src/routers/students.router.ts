import { Request, Response, Router } from 'express'
import studenstsService from '../services/studensts.service'

const studentsRouter = Router()

//pegar todos os estudantes
studentsRouter.get('/', async (req: Request, res: Response) => {
  const students = await studenstsService.getAll()
  res.send(students)
})

//trazer apenas um estudante pelo documento
studentsRouter.get('/listOne/:document', async (req: Request, res: Response) => {
  const student = await studenstsService.getByDocument(req.params.document)
  if (!student) return res.status(400).send({ message: 'Estudante não encontrado' })
  res.send(student)
})

//adicionar um novo estudante
studentsRouter.post('/', async (req: Request, res: Response) => {
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
studentsRouter.patch('/update/:document', (req: Request, res: Response) => {
  try {
    studenstsService.update(req.params.document, req.body)
    res.status(200).send({ message: 'Estudante atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }

  // deletar um estudante
  studentsRouter.delete('/remove/:document', async (req: Request, res: Response) => {
    try {
      await studenstsService.remove(req.params.document)
      res.status(200).send({ message: 'Estudante removido com sucesso!' })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  })
})

export default studentsRouter
