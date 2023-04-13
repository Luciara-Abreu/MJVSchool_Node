import { Schema } from 'mongoose'
import mongoose from 'mongoose'
import IAdm from '../interface/adm.interface'

export const admSchema = new Schema<IAdm>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
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
