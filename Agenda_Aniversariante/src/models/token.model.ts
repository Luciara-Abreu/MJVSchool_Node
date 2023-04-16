import mongoose from 'mongoose'
import { IToken } from 'src/interfaces/token.interface'

const tokenSchema = new mongoose.Schema<IToken>({
  token: {
    type: String,
  },
  admId: {
    type: String
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

const Token = mongoose.model<IToken>('tokens', tokenSchema)
export default Token
