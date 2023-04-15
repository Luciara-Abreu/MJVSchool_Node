import { isValidObjectId } from 'mongoose'
import { IAdm } from '../interfaces/adm.interface'
import admRepository from '../repository/adm.repository'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()
const secretJWT = process.env.JWT_SECRET_KEY || ''

class AdmService {
  async getAll() {
    const list = await admRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('Lista vazia 👻')
    }
    return admRepository.getAll()
  }

  async getOne(id: string) {
    this.getByIdValid(id)
    const idAdm = await admRepository.getById(id)
    if (!idAdm) {
      throw new Error('Administrador não encontrado 👻')
    }
    return idAdm
  }

  async create(name: string, email: string, adm: IAdm) {
    const thisName = await admRepository.getByName(name)
    const thisEmail = await admRepository.getByEmail(email)

    if (thisName?.name === String(adm.name)) {
      throw new Error('Nome invalido')
    }

    if (thisEmail?.email === String(adm.email)) {
      throw new Error('Email invalido')
    }

    if (adm.password) {
      adm.password = await bcrypt.hash(adm.password, 10)
    }
    return admRepository.create(adm)
  }

  async update(id: string, name: string, email: string, adm: Partial<IAdm>) {
    this.getByIdValid(id)
    const idExist = await admRepository.getById(id)
    const thisName = await admRepository.getByName(name)
    const thisEmail = await admRepository.getByEmail(email)

    if (!idExist) {
      throw new Error('Administrador não encontrado 👻')
    }
    if (thisName?.name === String(adm.name)) {
      throw new Error('Nome invalido')
    }
    if (thisEmail?.email === String(adm.email)) {
      throw new Error('Email invalido')
    }
    if (adm.password) {
      adm.password = await bcrypt.hash(adm.password, 10)
    }
    const newAdm = await admRepository.update(id, adm)
    return newAdm
  }

  async remove(id: string) {
    this.getByIdValid(id)
    const idAdm = await admRepository.getById(id)
    if (!idAdm) {
      throw new Error('Usuário não encontrado 👻')
    }
    await admRepository.remove(id)
  }

  //validar Id
  public getByIdValid(_id: string) {
    if (!isValidObjectId(_id)) throw new Error('Id invalido 👎🏻')
  }
}
export default new AdmService()


