import mongoose from 'mongoose'
import PostModel from '../model/post.model'


const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    unique: true,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  }
})

PostSchema.loadClass(PostModel)
const PostEntity = mongoose.model('posts', PostSchema)

export default PostEntity
