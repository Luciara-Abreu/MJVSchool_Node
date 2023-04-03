import { Request, Response } from 'express'
import createPostService from '../sercive/postsServices/create.post.service'
import listAllPostService from '../sercive/postsServices/list.posts.service'
import listOnePostService from '../sercive/postsServices/list.one.post.service'
import deletePostService from '../sercive/postsServices/delete.post.service'
import updatePostService from '../sercive/postsServices/update.post.service'

class PostController {
  public async createPost(req: Request, res: Response) {
    try {
      const post = await createPostService.execute(req.body)
      res.status(200).send({ message: 'Post add com sucesso! ', post })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async listAllPosts(req: Request, res: Response) {
    try {
      const showPosts = await listAllPostService.execute()
      res.status(200).send({ message: 'Lista de postagens ==>  ', showPosts })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async listOnePost(req: Request, res: Response) {
    try {
      const post = listOnePostService.execute(req.params.id)
      res.status(200).send({ message: `Id pesquisado  ${req.params.id} ==>`, post })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      deletePostService.execute(req.params.id)
      res.status(200).send({ message: 'Postagem deletada com sucesso!' })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async updatePost(req: Request, res: Response) {
    try {
      const post = updatePostService.execute(req.params.id, req.body)
      res.status(200).send({ message: `Usuário atualizado com sucesso! ==> `, post })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }
}

export default new PostController()
