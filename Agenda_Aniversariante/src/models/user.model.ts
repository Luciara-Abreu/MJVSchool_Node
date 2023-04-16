import mongoose from 'mongoose'
import { IUser } from 'src/interfaces/user.interface'

const userSchema = new mongoose.Schema<IUser>({
  
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
  updatedAt: {
    type: Date,
    default: new Date(),
  },
})

const User = mongoose.model<IUser>('Users', userSchema)
export default User
