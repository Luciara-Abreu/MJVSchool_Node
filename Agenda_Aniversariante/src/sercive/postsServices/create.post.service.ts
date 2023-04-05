
class CreatePostService {
  public async execute(newPost: IPostType): Promise<PostModel> {
    const userId = UserMock.findIndex(user => user.id === Number(newPost.userID))
    if (userId === -1) {
      throw new Error('Post não encontrado')
    }
    const postId = PostMock.find(post => post.id === newPost.id || post.title === newPost.title || post.content === newPost.content)
    if (postId) {
      throw new Error('Post já cadastrado')
    }
    await PostMock.push(newPost)
    return newPost
  }
}
export default new CreatePostService()
