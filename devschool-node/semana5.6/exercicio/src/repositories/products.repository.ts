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
  
  getByImg(img: string) {
    return Product.findOne({ img: img })
  }

  create(product: IProd) {
    return Product.create(product)
  }

 update(_id: string, product: Partial<IProd>) {
    return Product.updateOne({_id: _id },{ $set: product })
  }

  remove(id: string) {
    return Product.deleteOne({ _id: id })
  }
}
export default new ProductRepository()
