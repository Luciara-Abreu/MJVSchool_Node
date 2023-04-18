import admRepository from '../repository/adm.repository'
import bcrypt from 'bcrypt'
import tokenRepository from 'src/repository/token.repository'
import { isAfter, addHours } from 'date-fns'
import { IToken } from 'src/interfaces/token.interface'
import EtherealEmail from '@config/mail/ethereal.mail'
import { resolve } from 'path'

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

    const sendEmail = resolve(`src/config/mail/views/send.password.hbs`)

    await EtherealEmail.sendMail({
      to: {
        name: admId.name,
        email: admId.email,
      },
      subject: `[API AGENDA ANIVERSARIANTES] Recuperação de Senha`,
      templateData: {
        file: sendEmail,
        variables: {
          name: admId.name,
          link: `http://localhost:3000/adm/resetPassword?token=${admToken.token}`,
          //token: admToken.token,
        },
      },
    })
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
