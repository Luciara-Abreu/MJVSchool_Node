import User from '../../models/user.model'
import userRepository from '../../repository/user.repository'

class UserService {
  async ListAll() {
    const list = userRepository.getAll()
    if (list === null) {
      throw new Error('não existe produtos na lista 👻')
    }
    return userRepository.getAll()
  }

  async listOne(id: string) {
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    return idUser
  }

  async create(id: string, newUSer: typeof User) {
    const userId = await userRepository.getById(id)
    if (userId) {
      throw new Error('Usuário já cadastrado')
    }
    await userRepository.create(newUSer)
    return newUSer
  }

  async update(id: string, user: Partial<typeof User>) {
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    const userUpdate = userRepository.update(id, user)
    return userUpdate
  }

  async Delete(id: string) {
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    userRepository.remove(id)
  }
}
export default new UserService()
