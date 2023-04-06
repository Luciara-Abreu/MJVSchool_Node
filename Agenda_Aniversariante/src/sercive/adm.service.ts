import Adm from '../models/adm.model'
import admRepository from '../repository/adm.repository'

class AdmService {
  async getAll() {
    const list = await admRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('Lista vazia 👻')
    }
    return admRepository.getAll()
  }

  async getOne(id: string) {
    const idAdm = await admRepository.getById(id)
    if (!idAdm) {
      throw new Error('Administrador não encontrado 👻')
    }
    return idAdm
  }

  async create(name: string, email: string, birthDate: string, newAdm: typeof Adm) {
    const userName = await admRepository.getByName(name)
    const userEmail = await admRepository.getByEmail(email)
    const userBirthDate = await admRepository.getByBirthDate(birthDate)

    if (!userName && !userEmail && !userBirthDate) {
      return await admRepository.create(newAdm)
    } else {
      throw new Error('Administrador já cadastrado')
    }
  }

  async update(id: string, adm: Partial<typeof Adm>) {
    const idAdm = await admRepository.getById(id)
    if (!idAdm) {
      throw new Error('Administrador não encontrado 👻')
    }
    const admUpdate = admRepository.update(id, adm)
    return admUpdate
  }

  async remove(id: string) {
    const idAdm = await admRepository.getById(id)
    if (!idAdm) {
      throw new Error('Usuário não encontrado 👻')
    }
    await admRepository.remove(id)
  }
}
export default new AdmService()
