import mongoose from 'mongoose'

const admSchema = new mongoose.Schema({
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
  fone: {
    type: String,
    required: true,
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
  password: {
    typw: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
})

const Adm = mongoose.model('Adms', admSchema)
export default Adm
