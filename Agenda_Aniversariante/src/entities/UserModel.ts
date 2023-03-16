import mongoose, { isObjectIdOrHexString } from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  birthDate: {
    type: Date,
    unique: true,
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
  lastName: {
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

const UserModel = mongoose.model('users', UserSchema)

export default UserModel

/**
 *   name: {
    type: String,
    unique: true,
    required: true
  },
  birthDate: {
    type: Date,
    unique: true,
    required: true
  },
  sexualOrientation: {
    type: String,
    unique: true,
    required: true
  },
  email: {
      type: String,
      unique: true,
      required: true
  },
  lastEmail: {
      type: String,
      unique: true,
      required: false
  },
  lastName: {
      type: String,
      required: true
  },
  hash: String,
  salt: String




  id: isObjectIdOrHexString,
  name: String,
  birthDate: Date,
  sexualOrientation: String,
  email: String,
  lastEmail: String,
  fone: Number,
  avatar: Image,
 */
