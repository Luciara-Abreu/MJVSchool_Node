import admRepository from '../repository/adm.repository'
import bcrypt from 'bcrypt'
import tokenRepository from 'src/repository/token.repository'
import { isAfter, addHours } from 'date-fns'
import { IToken } from 'src/interfaces/token.interface'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import secret from '../config/key.secret/secret'

dotenv.config()

const secretJWT = process.env.JWT_SECRET_KEY || secret.JWT_SECRET_KEY || ''

class ResetPasswordAdmService {
  // Envio de e-mail
  async SendEmail(Email: string) {
    const admId = await admRepository.getByEmail(Email)
    if (!admId) {
      throw new Error('Administrador não encontrado 👻')
    }

    const token = jwt.sign({ email: admId.email, id: admId.id }, secretJWT, {
      expiresIn: '1h',
    })
    if (token) {
      await tokenRepository.SalveToken({ token, admId: admId.id })
    }

    const transport = nodemailer.createTransport({
      host: process.env.HOST_GMAIL,
      port: Number(process.env.PORT_GMAIL),
      secure: true,
      auth: {
        user: process.env.USERMAIL,
        pass: secret.SECRET_PASSMAIL || process.env.PASSMAIL,
      },
    })

    const sendEmail = `
    <p>Olá ${admId.name}!</p>
    <br />
    <p>Recebemos uma solicitação de redefinição de senha para a sua conta de usuário.</p>
    <p>Se realmente foi você que solicitou, copie  token abaixo e com ele, resete sua senha</p>
    <div>
    <p> Copie o token ==>  ${token} </p>
    <br />
    </div> 
    <p>Caso você não tenha realizado essa solicitação, descarte este email.</p>
    <br />
    <p>Obrigado!</p>
    <p>${process.env.EQUIPE_USER}</p>
  </div>
  `

    const message = transport.sendMail({
      from: {
        name: String(process.env.EQUIPE_USER),
        address: String(process.env.USERMAIL),
      },
      to: admId.email,
      subject: `[API AGENDA ANIVERSARIANTES] Recuperação de Senha`,
      html: sendEmail,
    })
    if (!message) {
      throw new Error('Não foi possível enviar o email. Tente novamente!')
    }
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

export default new ResetPasswordAdmService()
