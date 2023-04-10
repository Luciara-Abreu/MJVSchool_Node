import { IAdm } from '../interfaces/adm.interface'
import Adm from '../models/adm.model'
import admRepository from '../repository/adm.repository'
import { hash } from 'bcryptjs'

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

  async create({name, birthDate, sexualOrientation, email, fone, avatar, password}:IAdm) {
    const hashedPassword = await hash(password, 8)

    const userName = await admRepository.getByName(name)
    const userEmail = await admRepository.getByEmail(email)
    const userBirthDate = await admRepository.getByBirthDate(String(birthDate))

    if (!userName && !userEmail && !userBirthDate) {
  
      return await admRepository.create({
        name, 
        birthDate,
        sexualOrientation, 
        email, 
        fone, 
        avatar, 
        password:hashedPassword
      })
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
