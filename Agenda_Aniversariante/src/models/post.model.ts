import mongoose from 'mongoose'
import User from './user.model'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
},
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Post = mongoose.model('Posts', postSchema)
export default Post
