import mongoose from 'mongoose'
import UserModel from '../model/user.model'


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
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
    unique: true,
    required: true,
  },
  lastEmail: {
    type: String,
    required: false,
  },
  fone: {
    type: String,
    required: true,
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
})

UserSchema.loadClass(UserModel)
const UserEntity = mongoose.model('users', UserSchema)

export default UserEntity
