import { Request, Response, Router } from 'express'
import ProductService from '../service/product.service'

const ProductsRouter = Router()

//listar todos
ProductsRouter.get('/', (req: Request, res: Response) => {
  try {
    const listProducts = ProductService.getAll()
    res.send(listProducts)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//listar um
ProductsRouter.get('/listOne/:id', (req: Request, res: Response) => {
  try {
    const prod = ProductService.getById(req.params.id)
    res.send(prod)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//add Produto
ProductsRouter.post('/', (req: Request, res: Response) => {
  try {
    ProductService.create(req.body)
    res.status(201).send({ message: 'Produto add com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar
ProductsRouter.put('/update/:id', (req: Request, res: Response) => {
  const id = req.params.id

  try {
    ProductService.update(id, req.body)
    res.status(200).send({ message: 'Produto atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//deletar
ProductsRouter.delete('/remove/:id', (req: Request, res: Response) => {
  try {
    ProductService.remove(req.params.id)
    res.status(200).send({ message: 'Produto deletado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default ProductsRouter
