// Use at least Nodemailer v4.1.0
import nodemailer from 'nodemailer'
import { ISendMail } from 'src/interfaces/email.interface'
import mailTemplate from '../mail/template.mail.hendlebars'
/**
 * https://nodemailer.com/about/
 * O Nodemailer é uma biblioteca do NodeJS que possibilita que o sistema,
 * consiga realizar o envio de e-mail para um usuário.
 */
class ResetEmail {
  static async sendMail({ from, to, subject, templateData }: ISendMail): Promise<void> {
    const account = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    })

    const message = await transporter.sendMail({
      from: {
        name: from?.name || 'Equipe API Aniversariantes',
        address: from?.email || 'equipe@apianiversariantes.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await mailTemplate.parse(templateData),
    })

    console.log('')
    console.log('Message send => %s', message.messageId)
    console.log('Preview URL  => %s', nodemailer.getTestMessageUrl(message))
  }
}
export default ResetEmail
