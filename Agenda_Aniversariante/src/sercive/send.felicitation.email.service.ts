import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import { IPost, IToEmail } from 'src/interfaces/post.interface'
import postRepository from 'src/repository/post.repository'
import userRepository from 'src/repository/user.repository'
import secret from '../secret'

dotenv.config()

class SendPostEmail {
  async sendPostemail({ email, title, content }: IToEmail) {
    const user = await userRepository.getByEmail(email)
    if (!user) {
      throw new Error('Usuário não encontrado 👻')
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
    <div class="message-content">
    <p>Olá ${user.name}! 🥳🎉</p>
    <br />
    <div>
      ${title}
      <p>${content}.</p>
    </div>
    <br />
    <p>São os votos da ${process.env.EQUIPE_USER} 🙌</p>
  `
    const message = await transport.sendMail({
      from: {
        name: String(process.env.EQUIPE_USER),
        address: String(process.env.USERMAIL),
      },
      to: email,
      subject: title,
      html: sendEmail,
    })

    if (!message) {
      throw new Error('Mensagem não enviada')
    }
    const newPost: IPost = {
      title,
      content,
      userId: String(user._id),
    }
    await postRepository.create(newPost)
  }
}

export default new SendPostEmail()
