import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
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
  },  
  createdAt: {
    type: Date,
    default: new Date(),
  }
})

const Post = mongoose.model('Posts', postSchema)
export default Post

