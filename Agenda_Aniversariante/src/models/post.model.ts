import mongoose from 'mongoose'
import { IPost } from 'src/interfaces/post.interface'

const postSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  }
})


const Post = mongoose.model<IPost>('Posts', postSchema)
export default Post
