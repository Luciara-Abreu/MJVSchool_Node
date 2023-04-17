import admRepository from '../repository/adm.repository'
import bcrypt from 'bcrypt'
import tokenRepository from 'src/repository/token.repository'
import { isAfter, addHours } from 'date-fns'
import { IToken } from 'src/interfaces/token.interface'

class AdmToken {
  // Envio de e-mail para recuperar senha sendForgot
  async SendEmail(email: string) {
    const admId = await admRepository.getByEmail(email)
    if (!admId) {
      throw new Error('Administrador não encontrado 👻')
    }
    const admToken = await tokenRepository.getByAdmId(admId.id)
    if (!admToken) {
      throw new Error('Token não encontrado 👻')
    }
    return admToken.token
  }

  // Reset password / Esqueceu a senha
  async ressetPassword(token: IToken, password: string, passwordConfirmation: string) {
    const admNewToken = await tokenRepository.getByNewToken(token.token)
    if (!admNewToken) {
      throw new Error('Token não encontrato 👻')
    }
    const admId = await admRepository.getById(admNewToken.admId)
    if (!admId) {
      throw new Error('Administrador não encontrado 👻')
    }

    if (!admNewToken.token) {
      throw new Error('Token inválido! 👻')
    }

    //Validade do token
    const tokenCreatedAt = admNewToken.createdAt
    if (tokenCreatedAt) {
      const compareDate = addHours(tokenCreatedAt, 2)

      if (isAfter(Date.now(), compareDate)) {
        throw new Error('Token expirado 👻')
      }
    }

    //Validar se as senhas são iguais
    if (password != passwordConfirmation) {
      throw new Error('As senhas digitadas não coincidem 👻')
    }
    admId.password = await bcrypt.hash(password, 10)
    await admRepository.update(admId.id, admId)
  }
}

export default new AdmToken()

/**
 async ressetPassword(token: IToken, password: string, passwordConfirmation: string) {
    const admNewToken = await tokenRepository.getByNewToken(token.token)
    const admToken = await tokenRepository.getByToken(token)
    console.log(admToken)
    if (!admToken) {
      throw new Error('Token não encontrato 👻')
    }
    const admId = await admRepository.getById(admToken.admId)
    if (!admId) {
      throw new Error('Administrador não encontrado 👻')
    }

    //Validade do token
    const tokenCreatedAt = admToken.createdAt
    if (tokenCreatedAt) {
      const compareDate = addHours(tokenCreatedAt, 2)

      if (isAfter(Date.now(), compareDate)) {
        throw new Error('Token expirado 👻')
      }
    }

    //Validar se as senhas são iguais
    if (password != passwordConfirmation) {
      throw new Error('As senhas digitadas não coincidem 👻')
    }
    admId.password = await bcrypt.hash(password, 10)
    await admRepository.update(admId.id, admId)
  }
}
 */
