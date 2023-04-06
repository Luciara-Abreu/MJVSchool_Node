import { Request, Response, Router } from 'express'
import postService from '../sercive/post.service'

const postRoute = Router()

console.log('✨ ********** Rotas de Post *************** ✨')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

//listar todos
postRoute.get('/listAll', async (req: Request, res: Response) => {
  try {
    const listPost = await postService.getAll()
    res.status(200).send(listPost)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//listar um
postRoute.get('/listOne/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const post = await postService.getOne(id)
    res.status(200).send(post)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//Adicionar post
postRoute.post('/createPost', async (req: Request, res: Response) => {
  try {
    await postService.create(req.body.title, req.body.content, req.body.userId, req.body)
    res.status(200).send({ message: 'Mensagem adicionado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar
postRoute.patch('/update/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    await postService.update(id, req.body)
    res.status(200).send({ message: 'Mensagem atualizada com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//deletar
postRoute.delete('/remove/:id', async (req: Request, res: Response) => {
  try {
    await postService.remove(req.params.id)
    res.status(200).send({ message: 'Mensagem removida com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default postRoute