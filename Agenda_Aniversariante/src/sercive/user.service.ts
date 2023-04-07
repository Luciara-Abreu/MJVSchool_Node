import User from '../models/user.model'
import userRepository from '../repository/user.repository'

class UserService {
  async getAll() {
    const list = await userRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('A lista está vazia 👻')
    }
    return list
  }

  async getOne(id: string) {
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    return idUser
  }

  async create(name: string, email: string, birthDate: string, newUSer: typeof User) {
    const userName = await userRepository.getByName(name)
    const userEmail = await userRepository.getByEmail(email)
    const userBirthDate = await userRepository.getByBirthDate(birthDate)

    if (!userName && !userEmail && !userBirthDate) {
      return await userRepository.create(newUSer)
    } else {
        throw new Error('Usuário já cadastrado')
    }
  }

  async update(id: string, user: Partial<typeof User>) {
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    const userUpdate = userRepository.update(id, user)
    return userUpdate
  }

  async remove(id: string) {
    const idUser = await userRepository.getById(id)
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    await userRepository.remove(id)
  }
}
export default new UserService()
