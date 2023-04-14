import { IPost } from '../interfaces/post.interface'
import Post from '../models/post.model'

class PostRepository {
  getAll() {
    return Post.find()
  }

  getById(_id: string) {
    return Post.findOne({ _id: _id })
  }

  getUserId(_id: string) {
    return Post.find({ userId: _id })
  }

  create(post: IPost) {
    return Post.create(post)
  }

  update(_id: string, post: Partial<IPost>) {
    return Post.updateOne({ _id: _id }, { $set: post })
  }

  remove(id: string) {
    return Post.deleteOne({ _id: id })
  }
}

export default new PostRepository()
