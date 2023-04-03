import express from 'express'
import postController from '../../controllers/post.controller'

const postRoute = express()

console.log('✨ ********** Rotas de Postagens ********** ✨')

postRoute.post('/AddPost', postController.createPost)
postRoute.get('/ListAllPosts', postController.listAllPosts)
postRoute.get('/ListOnePost/:id', postController.listOnePost)
postRoute.delete('/RemovePost/:id', postController.delete)
postRoute.patch('/UpdatePost/:id', postController.updatePost)

export default postRoute
