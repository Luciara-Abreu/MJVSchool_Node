import mongoose, { Schema } from 'mongoose'

const admTokensSchema = new mongoose.Schema({
   token: {
    type: String,
  },
  admId: {
    type: String,
    required: true,
  },
   createdAt: {
    type: Date,
    default: new Date(),
  }
})

const Token = mongoose.model('Tokens', admTokensSchema)
export default Token
