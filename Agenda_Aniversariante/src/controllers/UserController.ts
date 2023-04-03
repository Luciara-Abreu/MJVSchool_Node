import { Request, Response } from 'express'
import CreateUserService from '../sercive/userServices/createUserService'
import ListAllUserService from '../sercive/userServices/listAllUserService'
import ListOneUserService from '../sercive/userServices/listOneUserService'
import updateUserService from '../sercive/userServices/updateUserService'
import DeleteUserService from '../sercive/userServices/deleteUserService'

class UserController {
  public async createUser(req: Request, res: Response) {
    try {
      const thisUser = await CreateUserService.execute(req.body)
      res.status(200).send({ message: 'Usuário add com sucesso! ', thisUser })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async listAllUsers(req: Request, res: Response) {
    try {
      const showUsers = await ListAllUserService.execute()
      res.status(200).send({ message: 'Lista de Usuários ==>  ', showUsers })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async listOneUser(req: Request, res: Response) {
    try {
      const user = ListOneUserService.execute(req.params.id)
      res.status(200).send({ message: `Id pesquisado  ${req.params.id} ==>`, user })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const user = updateUserService.execute(req.params.id, req.body)
      res.status(200).send({ message: `Usuário atualizado com sucesso! ==> `, user })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      DeleteUserService.execute(req.params.id)
      res.status(200).send({ message: 'Usuário deletado com sucesso!' })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }
}

export default UserController
