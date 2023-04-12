import { Schema } from 'mongoose'
import mongoose from 'mongoose'
import IStudent from '../interfaces/student.interface'

export const studentSchema = new Schema<IStudent>({
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
  document: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  fone: {
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

const Student = mongoose.model<IStudent>('Student', studentSchema)
export default Student
