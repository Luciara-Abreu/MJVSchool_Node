import { PostMock } from '../../config/postMocks'

class ListOnePostService {
  public execute(id: string) {
    const idPost = PostMock.find(post => post.id === Number(id))
    if (!idPost)  {
      throw new Error('Post não encontrado 👻')
    }
    return idPost
  }
}
export default new ListOnePostService()
