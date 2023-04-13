import { Schema } from 'mongoose'
import mongoose from 'mongoose'
import IProd from '../interface/product.interface'

export const productSchema = new Schema<IProd>({
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
  updatedAt: {
    type: Date,
    default: new Date(),
  },
})

const Product = mongoose.model<IProd>('Product', productSchema)
export default Product
