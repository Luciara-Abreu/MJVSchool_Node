import 'module-alias/register'
import { compare } from 'bcryptjs'
import admRepository from '../repository/adm.repository'
import jwt from 'jsonwebtoken'
import authConfig from '@config/auth'
import { IAuthType } from 'src/interfaces/adm.interface'

class SessionAuthService {
  async execute({email, password}: IAuthType) {
    const adm = await admRepository.getByEmail(email)
    if (!adm) {
      throw new Error('Adm nã encontrado')
    }
    const passwordConfirmed = await compare(password, adm.password)

    if (adm && !passwordConfirmed) {
      throw new Error('A combinação de email/password, está incorreta 🤪')
    }
    const token = jwt.sign({ id: adm.id?.toString(), name: adm.name }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    })

    return {
      adm,
      token
    }
  }
}

export default new SessionAuthService()
