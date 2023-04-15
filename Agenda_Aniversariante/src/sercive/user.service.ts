import { IUser } from 'src/interfaces/user.interface'
import User from '../models/user.model'
import userRepository from '../repository/user.repository'
import { isValidObjectId } from 'mongoose'

class UserService {
  async getAll() {
    const list = await userRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('A lista está vazia 👻')
    }
    return list
  }

  async getOne(id: string) {
    this.getByIdValid(id)
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    return idUser
  }

  async create(name: string, email: string, newUSer: IUser) {
    const userName = await userRepository.getByName(name)
    const userEmail = await userRepository.getByEmail(email)

    if (!userName && !userEmail) {
      return await userRepository.create(newUSer)
    } else {
      throw new Error('Usuário já cadastrado')
    }
  }

  async update(id: string, user: Partial<IUser>) {    
    this.getByIdValid(id)
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    const userUpdate = userRepository.update(id, user)
    return userUpdate
  }

  async remove(id: string) {
    this.getByIdValid(id)
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    await userRepository.remove(id)
  }

  //validar Id
  public getByIdValid(_id: string) {
    if (!isValidObjectId(_id)) throw new Error('Id invalido 👎🏻')
  }
}
export default new UserService()
