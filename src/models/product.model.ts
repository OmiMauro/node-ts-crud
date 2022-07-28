import mongoose from 'mongoose'
import { UserDocument } from './user.model'

export interface ProductInput {
  user: UserDocument['_id']
  price: number
  description: string
  title: string
  image: string
}

export interface ProductDocument extends mongoose.Document, ProductInput {
  createdAt: Date
  updatedAt: Date
}

const productSchema = new mongoose.Schema({
  user: {},
  price: {},
  description: {},
  title: {},
  image: {},
})

const Product = mongoose.model<ProductDocument>('Product', productSchema)
export default Product
