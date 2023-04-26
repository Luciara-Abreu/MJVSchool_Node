import { IPost } from 'src/interfaces/post.interface'
import Post from '../models/post.model'
import postRepository from '../repository/post.repository'
import userRepository from '../repository/user.repository'
import { isValidObjectId } from 'mongoose'

class PostService {
  async getAll() {
    const list = await postRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('não existe mensagem na lista 👻')
    }
    return postRepository.getAll()
  }

  async getOne(id: string) {
    this.getByIdValid(id)
    const idPost = await postRepository.getById(id)
    if (!idPost) {
      throw new Error('Mensagem não encontrada 👻')
    }
    return idPost
  }

  async create(title: string, content: string, userId: string, newPost: IPost) {
    const dataReq = { title, content }
    const userPost = await postRepository.getUserId(userId)

    const Title = dataReq.title
    const Content = dataReq.content

    const validation = userPost.find(x => x.title === Title || x.content === Content)
    if (validation) {
      throw new Error('Mensagem já cadastrada para esse usuário')
    }
    return await postRepository.create(newPost)
  }

  async update(id: string, post: Partial<IPost>) {
    this.getByIdValid(id)
    const idPost = await postRepository.getById(id)
    if (!idPost) {
      throw new Error('Mensagem não encontrada 👻')
    }
    const postUpdate = postRepository.update(id, post)
    return postUpdate
  }

  async remove(id: string) {
    this.getByIdValid(id)
    const idPost = await postRepository.getById(id)
    if (!idPost) {
      throw new Error('Mensagem não encontrada 👻')
    }
    await postRepository.remove(id)
  }

  async listPostForUSer(id: string, userId: string) {
    this.getByIdValid(id)
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    const userPost = await postRepository.getUserId(id)
    if (!userPost) {
      throw new Error('Nenhuma menagem encontrada para esse usuário 👻')
    }
    const showList = {
      idUser,
      userPost,
    }
    return showList
  }

  //validar Id
  public getByIdValid(_id: string) {
    if (!isValidObjectId(_id)) throw new Error('Id invalido 👎🏻')
  }
}

export default new PostService()
