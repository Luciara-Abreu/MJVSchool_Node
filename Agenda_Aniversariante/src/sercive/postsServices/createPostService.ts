import { PostMock } from '../../config/postMocks'
import { UserMock } from '../../config/userMock'
import IPostType from '../../interfaces/IPost'
import PostModel from '../../model/postModel'

class CreatePostService {
  public async execute(newPost: IPostType): Promise<PostModel> {
    const userId = UserMock.findIndex(user => user.id === Number(newPost.userID))
    if (userId === -1) {
      throw new Error('Usuário não encontrado')
    }
    const postId = PostMock.find(post => post.title === newPost.title && post.content === newPost.content)
    if (postId) {
      throw new Error('Post Ja cadastrado')
    }
    await PostMock.push(newPost)
    return newPost
  }
}
export default new CreatePostService()
