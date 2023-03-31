import ProductsMock from '../bd.Mock/mockProducts'
import { IproductModel } from '../models/products.model'

class ProductService {
  // listar todos
  getAll() {
    if (ProductsMock === null) {
      throw new Error('não existe produtos na lista 👻')
    }
    return ProductsMock
  }

  //listar um
  getById(id: string) {
    const idProd = ProductsMock.find(prodId => prodId.id === Number(id))
    if (!idProd) {
      throw new Error('Produto não encontrado 👻')
    }
    return idProd
  }

  //add Prod
  create(product: IproductModel) {
    const idProd = ProductsMock.find(prod => prod.description === product.description)
    if (idProd) {
      throw new Error('Produto ja cadastrado')
    }
    const newProd = ProductsMock.push(product)
    return newProd
  }

  //atualizar dados
  update(id: string, produt: Partial<IproductModel>) {
    const prodIndex = ProductsMock.findIndex(prod => prod.id === Number(id))
    if (prodIndex === -1) {
      throw new Error('Produto não encontrado 👻')
    }

    const updateData = {
      ...ProductsMock[prodIndex],
      ...produt,
    }
    
    ProductsMock[prodIndex] = updateData
    //console.log('prod here ===>', updateData)
    return { message: 'Produto atualizado com sucesso'}
  }

  // deletar um prod
  remove(id: string) {
    const prod = ProductsMock.findIndex(prodId => prodId.id === Number(id))
    if (prod === -1) {
      throw new Error('Produto não encontrado')
    }
    ProductsMock.splice(prod, 1)
  }
}

export default new ProductService()
