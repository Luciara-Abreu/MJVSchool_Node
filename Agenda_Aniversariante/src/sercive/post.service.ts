import Post from '../models/post.model'
import postRepository from '../repository/post.repository'

class PostService {
  async getAll() {
    const list = await postRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('não existe mensagem na lista 👻')
    }
    return postRepository.getAll()
  }

  async getOne(id: string) {
    const idPost = await postRepository.getById(id)
    if (!idPost) {
      throw new Error('Mensagem não encontrada 👻')
    }
    return idPost
  }

  async create(title: string, content: string, userId: string, newPost: typeof Post) {
    const postTitle = await postRepository.getByTitle(title)
    const postContent = await postRepository.getByContent(content)
    const user = await postRepository.getByUserId(userId)

    if (!postTitle && !postContent && !user) {
      return await postRepository.create(newPost)
    } else {
      throw new Error('Mensagem já cadastrada para esse usuário')
    }
  }

  async update(id: string, post: Partial<typeof Post>) {
    const idPost = await postRepository.getById(id)
    if (!idPost) {
      throw new Error('Mensagem não encontrada 👻')
    }
    const postUpdate = postRepository.update(id, post)
    return postUpdate
  }

  async remove(id: string) {
    const idPost = await postRepository.getById(id)
    if (!idPost) {
      throw new Error('Mensagem não encontrada 👻')
    }
    await postRepository.remove(id)
  }
}
export default new PostService()