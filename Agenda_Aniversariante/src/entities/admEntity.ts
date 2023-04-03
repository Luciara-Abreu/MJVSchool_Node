import mongoose from 'mongoose'
import AdmClass from '../model/admClass'

const AdmSchema = new mongoose.Schema({
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
})
AdmSchema.loadClass(AdmClass)
const Adm = mongoose.model('adms', AdmSchema)

export default Adm
