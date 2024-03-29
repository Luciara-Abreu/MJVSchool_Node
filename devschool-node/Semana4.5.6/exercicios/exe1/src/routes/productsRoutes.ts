import { Request, Response, Router } from 'express'
import ProductService from '../service/product.service'

const ProductsRouter = Router()

//listar todos
ProductsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const listProducts = await ProductService.getAll()
    res.status(200).send(listProducts)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//listar um
ProductsRouter.get('/listOne/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const prod = await ProductService.getOne(id)
    res.status(200).send(prod)
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//add Produto
ProductsRouter.post('/', async (req: Request, res: Response) => {
   const id = req.params.id
  try {
    await ProductService.create(id, req.body)
    res.status(200).send({ message: 'Produto add com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//atualizar
ProductsRouter.patch('/update/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    await ProductService.update(id, req.body)
    res.status(200).send({ message: 'Produto atualizado com sucesso' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//deletar
ProductsRouter.delete('/remove/:id', async (req: Request, res: Response) => {
  try {
    await ProductService.remove(req.params.id)
    res.status(200).send({ message: 'Produto deletado com sucesso!' })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

export default ProductsRouter
