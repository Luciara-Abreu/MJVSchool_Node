import Product from '../models/product.model'
import ProductRepository from '../repositories/products.repository'

class ProductService {
  // listar todos
  async getAll() {
    const list = await ProductRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('A lista está vazia 👻')
    }
    return list
  }

  //listar um
  async getOne(id: string) {
    const idProd = await ProductRepository.getById(id)
    if (!idProd) {
      throw new Error('Produto não encontrado 👻')
    }
    return ProductRepository.getById(id)
  }

  //add Prod
  async create(id: string, product: typeof Product) {
    const idProd = await ProductRepository.getById(id)
    if (!idProd) {
      const newProd = ProductRepository.create(product)
      return newProd
    }
    throw new Error('Produto ja cadastrado')
  }

  //atualizar dados
  async update(id: string, produt: Partial<typeof Product>) {
    const prodIndex = ProductRepository.getById(id)
    if (!prodIndex) {
      throw new Error('Produto não encontrado 👻')
    }
    const prod = await ProductRepository.update(id, produt)
    return prod
  }

  // deletar um prod
  async remove(id: string) {
    const prodIndex = ProductRepository.getById(id)
    if (!prodIndex) {
      throw new Error('Produto não encontrado 👻')
    }
    await ProductRepository.remove(id)
  }
}

export default new ProductService()
