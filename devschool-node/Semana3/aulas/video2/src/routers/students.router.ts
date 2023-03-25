import { Request, Response, Router } from 'express'

const studentsRouter = Router()

const students = [
  {
    name: 'Luci Abreu',
    email: 'luci.a@gmail.com',
    document: '48573499000152',
    password: '123456',
    age: 33,
  },
  {
    name: 'Lucio Machado',
    email: 'lucio.m@gmail.com',
    document: '48573499000153',
    password: '123456',
    age: 34,
  },
  {
    name: 'Anna Silva',
    email: 'anna.s@gmail.com',
    document: '48573499000154',
    password: '123456',
    age: 35,
  },
  {
    name: 'Pedro Paulo',
    email: 'pedor.p@gmail.com',
    document: '48573499000155',
    password: '123456',
    age: 36,
  },
  {
    name: 'Carlota Sebastian',
    email: 'carlota.s@gmail.com',
    document: '48573499000156',
    password: '123456',
    age: 37,
  },
  {
    name: 'José Pedreira',
    email: 'jose.p@gmail.com',
    document: '48573499000157',
    password: '123456',
    age: 38,
  },
  {
    name: 'Tatiana Araras',
    email: 'tatiana.a@gmail.com',
    document: '48573499000158',
    password: '123456',
    age: 39,
  },
  {
    name: 'Robson Silva',
    email: 'robson.s@gmail.com',
    document: '48573499000159',
    password: '123456',
    age: 40,
  },
  {
    name: 'Éder dias',
    email: 'eder.d@gmail.com',
    document: '48573499000150',
    password: '123456',
    age: 41,
  },
]

studentsRouter.get('/', (req: Request, res: Response) => {
  res.send(students)
})
studentsRouter.get('/listOne/:document', (req: Request, res: Response) => {
  const student = students.find(student => student.document === req.params.document)
  if (!student) return res.status(400).send({ message: 'Estudante não encontrado' })
  res.send(student)
})

studentsRouter.post('/', (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res.status(400).send({ message: 'Ops!! Idade minima (18 anos)' })
  }
  students.push(req.body)
  res.status(201).send({ message: 'Estudante add com sucesso!' })
})

studentsRouter.delete('/remove/:document', (req: Request, res: Response) => {
  const studentIndex = students.findIndex(student => student.document === req.params.document)
  if (studentIndex === -1) {
    return res.status(400).send({ message: 'Estudante não encontrado' })
  }
  students.splice(studentIndex, 1)
  res.status(201).send({ message: 'Estudante deletado com sucesso!' })
})

studentsRouter.put('/update/:document', (req: Request, res: Response) => {
  const studentIndex = students.findIndex(student => student.document === req.params.document)
  if (studentIndex === -1) {
    return res.status(400).send({ message: 'Estudante não encontrado' })
  }
  students[studentIndex] = req.body
  res.status(200).send({ message: 'Estudante atualizado com sucesso' })
})
export default studentsRouter
