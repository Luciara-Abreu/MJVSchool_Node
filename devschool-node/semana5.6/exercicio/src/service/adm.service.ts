import IAdm from '../interface/adm.interface'
import admRepository from '../repositories/adm.repository'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { isValidObjectId } from 'mongoose'

dotenv.config()
const secretJWT = process.env.JWT_SECRET_KEY || ''

class AdmService {
  // listar todos
  async getAll() {
    const list = await admRepository.getAll()
    if (list.length === 0 || !list.length) {
      throw new Error('A lista está vazia 👻')
    }
    return list
  }

  //listar um
  async getOne(id: string) {
    this.getByIdValid(id)
    const idExist = await admRepository.getById(id)
    if (!idExist) {
      throw new Error('Administrador não encontrado 👻')
    }
    return admRepository.getById(id)
  }

  //add
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



  //atualizar dados
  async update(id: string, email: string, adm: Partial<IAdm>) {
    this.getByIdValid(id)
    const idExist = await admRepository.getById(id)
    if (!idExist) {
      throw new Error('Administrador não encontrado 👻')
    }
    const thisEmail = await admRepository.getByEmail(email)

    if (thisEmail?.email === String(adm.email)) {
      throw new Error('Email invalido')
    }
    if (adm.password) {
      adm.password = await bcrypt.hash(adm.password, 10)
    }
    const newAdm = await admRepository.update(id, adm)
    return newAdm
  }

  // deletar
  async remove(id: string) {
    this.getByIdValid(id)
    const idExist = await admRepository.getById(id)
    if (!idExist) {
      throw new Error('Administrador não encontrado 👻')
    }
    await admRepository.remove(id)
  }

  //validar Id
  public getByIdValid(_id: string) {
    if (!isValidObjectId(_id)) throw new Error('Id invalido 👎🏻')
  }

  // Authentication
  async authorization(email: string, password: string) {
    const admId = await admRepository.getByEmail(email)
    if (!admId) {
      throw new Error('Administrador não encontrado 👻')
    }
    const result = await bcrypt.compare(password, admId.password)
    if (result) {
      return jwt.sign({ email: admId.email, id: admId.id }, secretJWT, {
        expiresIn: '1d',
      })
    }
    throw new Error('Falha na autenticação!')
  }
}

export default new AdmService()
