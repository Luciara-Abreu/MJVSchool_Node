import { PostMock } from '../../config/postMocks'

class DeletePostService {
  public execute(id: string) {
    const idPost = PostMock.findIndex(post => post.id === Number(id))
    if (idPost === -1) {
      throw new Error('Usuário não encontrado 👻')
    }
    PostMock.splice(idPost)
  }
}
export default new DeletePostService()
