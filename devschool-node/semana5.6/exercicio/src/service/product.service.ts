import { isValidObjectId } from 'mongoose'
import IProd from '../interface/product.interface'
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
    this.getByIdValid(id)
    const idProd = await ProductRepository.getById(id)
    if (!idProd) {
      throw new Error('Produto não encontrado 👻')
    }
    return ProductRepository.getById(id)
  }

  //add Prod
  async create(description: string, product: IProd) {
    const idProd = await ProductRepository.getByDescription(description)
    if (!idProd) {
      const newProd = await ProductRepository.create(product)
      return newProd
    }
    throw new Error('Produto ja cadastrado')
  }

  //atualizar dados
  async update(id: string, produt: Partial<IProd>) {
    this.getByIdValid(id)
    const prodIndex = ProductRepository.getById(id)
    if (!prodIndex) {
      throw new Error('Produto não encontrado 👻')
    }
    const prod = await ProductRepository.update(id, produt)
    return prod
  }

  // deletar um prod
  async remove(id: string) {
    this.getByIdValid(id)
    const idProd = await ProductRepository.getById(id)
    if (!idProd) {
      throw new Error('Produto não encontrado 👻')
    }
    return await ProductRepository.remove(id)
  }

  //validar Id
  public getByIdValid(_id: string) {
    if (!isValidObjectId(_id)) throw new Error('Id invalido 👎🏻')
  }
}

export default new ProductService()
