import { PostMock } from '../../config/postMocks'
import PostModel from '../../model/postModel'

class UpdatePostService {
  public execute(id: string, post: Partial<PostModel>) {
    const idPost = PostMock.findIndex(post => post.id === Number(id))
    if (idPost === -1) {
      throw new Error('Postagem não encontrada 👻')
    }
    const updateData = {
      ...PostMock[idPost],
      ...post,
    }
    const postUpdate = (PostMock[idPost] = updateData)
    return postUpdate
  }
}
export default new UpdatePostService()
