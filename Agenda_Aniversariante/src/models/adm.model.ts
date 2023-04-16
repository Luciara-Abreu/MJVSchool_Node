import mongoose from 'mongoose'
import { IAdm } from 'src/interfaces/adm.interface'

const admSchema = new mongoose.Schema<IAdm>({
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
  password: {
    type: String,
    required: true,
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

const Adm = mongoose.model<IAdm>('Adms', admSchema)
export default Adm
