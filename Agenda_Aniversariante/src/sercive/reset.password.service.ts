import { isAfter, addHours} from 'date-fns'
import admRepository from '../repository/adm.repository'
import { hash } from 'bcryptjs'
import Adm from 'src/models/adm.model'
import tokenRepository from 'src/repository/token.repository'

interface IRequest {
  token: string
  password: string
}
class ResetPasswordService {
  async create({token, password}:IRequest) {
    const admToken = await tokenRepository.getFindByToken(token)
    if (!admToken) {
      throw new Error('Adm Token encontrado 👻')
    }
    const adm = await admRepository.getById(admToken.admId)
    if (!adm) {
      throw new Error('Adm não encontrado 👻')
    }

  const tokenCReatedAt = admToken.createdAt
  const compareDate = addHours(tokenCReatedAt, 2)

  if(isAfter(Date.now(), compareDate)){
    throw new Error('Token expirado 😫')
  }

  adm.password = await hash(password, 8)
  //await admRepository.update(id, adm)

  }
}
export default new ResetPasswordService()