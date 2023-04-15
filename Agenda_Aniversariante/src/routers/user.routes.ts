import { Request, Response, Router } from 'express'
import userService from '../sercive/user.service'


const userRoute = Router()

console.log('')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('✨ ******* Rotas de User ****************** ✨')

//listar todos
userRoute.get('/listAll', async (req: Request, res: Response) => {
  try {
    const listUsers = await userService.getAll()
    res.status(200).send(listUsers)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//listar um
userRoute.get('/listOne/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const user = await userService.getOne(id)
    res.status(200).send(user)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//add user
userRoute.post('/createUser', async (req: Request, res: Response) => {
  try {
    await userService.create(req.body.name, req.body.email, req.body.birthDate, req.body)
    res.status(200).send({ message: 'Usuário adicionado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar
userRoute.patch('/update/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    await userService.update(id, req.body)
    res.status(200).send({ message: 'Usuário atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//deletar
userRoute.delete('/remove/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    await userService.remove(id)
    res.status(200).send({ message: 'Usuário deletado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default userRoute