import { isAfter, addHours} from 'date-fns'
import admRepository from '../repository/adm.repository'
import admTokenRepository from '../repository/admToken.repository'
import { hash } from 'bcryptjs'

interface IRequest {
  token: string
  password: string
}

class ResetPasswordService {
  async create({token, password}:IRequest) {
    const admToken = await admTokenRepository.getFindByToken(token)
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

  }
}
export default new ResetPasswordService()