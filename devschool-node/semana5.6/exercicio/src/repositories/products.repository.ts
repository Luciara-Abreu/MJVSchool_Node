import IProd  from '../interface/product.interface'
import Product from '../models/product.model'

class ProductRepository {
  getAll() {
    return Product.find()
  }

  getById(id: string) {
    return Product.findOne({ _id: id })
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
