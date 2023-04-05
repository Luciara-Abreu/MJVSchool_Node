import { Schema } from 'mongoose'
import mongoose from 'mongoose'

export const productSchema = new Schema({
  description: {
    type: String,
    unique: true,
    required: true,
  },
  img: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Product = mongoose.model('Product', productSchema)
export default Product
