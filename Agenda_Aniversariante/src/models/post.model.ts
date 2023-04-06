import mongoose, { Schema } from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    //  type: Schema.Types.ObjectId,
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
