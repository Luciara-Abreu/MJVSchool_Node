import { Request, Response, Router } from 'express'
import Products from './mockProducts'

const ProductsRouter = Router()

//listar todos
ProductsRouter.get('/', (req: Request, res: Response) => {
  res.send(Products)
})

//listar um
ProductsRouter.get('/listOne/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const prod = Products.find(prodId => prodId.id === Number(id))
  if (!prod) return res.status(400).send({ message: 'Produto não encontrado' })
  res.send(prod)
})

//atualizar
ProductsRouter.put('/update/:id', (req: Request, res: Response) => {
  const { id } = req.params

  const prod = Products.findIndex(prodId => prodId.id === Number(id))
  if (prod === -1) {
    return res.status(400).send({ message: 'Produto não encontrado' })
  }  
  Products[prod] = req.body
  res.status(200).send({ message: 'Produto atualizado com sucesso' })
})

//deletar
ProductsRouter.delete('/remove/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const prod = Products.findIndex(prodId => prodId.id === Number(id))
  if (prod === -1) {
    return res.status(400).send({ message: 'Produto não encontrado' })
  }
  Products.splice(prod, 1)
  res.status(200).send({ message: 'Produto deletado com sucesso!' })
})

//add Produto
ProductsRouter.post('/', (req: Request, res: Response) => {
  const { description } = req.body
  const prod = Products.find(prodId => prodId.description === String(description))

  if (prod) {
    return res.status(400).send({ message: 'Ops!! Produto já cadastrado, favor atualizar' })
  }
  Products.push(req.body)
  res.status(201).send({ message: 'Produto add com sucesso!' })
})

export default ProductsRouter
