import Post from '../models/post.model'

class PostRepository {
  getAll() {
    return Post.find()
  }

  getById(id: string) {
    return Post.findOne({ _id: id })
  }

  getByTitle(title: string) {
    return Post.findOne({ title: title })
  }
  getByContent(content: string) {
    return Post.findOne({ content: content })
  }
  getByUserId(userId: string) {
    return Post.findOne({ _id: userId })
  }

  create(post: typeof Post) {
    return Post.create(post)
  }

  update(id: string, post: Partial<typeof Post>) {
    return Post.updateOne({ _id: id }, { $set: post })
  }

  remove(id: string) {
    return Post.deleteOne({ _id: id })
  }
}

export default new PostRepository()
