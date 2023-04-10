import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  sexualOrientation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fone: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    contentType: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const User = mongoose.model('Users', userSchema)
export default User
