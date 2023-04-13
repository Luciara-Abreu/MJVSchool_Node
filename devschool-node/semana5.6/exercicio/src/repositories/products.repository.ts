import IProd  from '../interface/product.interface'
import Product from '../models/product.model'

class ProductRepository {
  getAll() {
    return Product.find()
  }

  getById(_id: string) {
    return Product.findOne({ _id: _id })
  }
  
  getByDescription(description: string) {
    return Product.findOne({ description: description })
  }

  create(product: IProd) {
    return Product.create(product)
  }

  update(id: string, product: Partial<IProd>) {
    return Product.updateOne({ _id: id, $set: product })
  }

  remove(id: string) {
    return Product.deleteOne({ _id: id })
  }
}
export default new ProductRepository()
