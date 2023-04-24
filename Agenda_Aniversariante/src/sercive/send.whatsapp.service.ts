import dotenv from 'dotenv'
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import { IPost } from 'src/interfaces/post.interface'
import postRepository from 'src/repository/post.repository'
import userRepository from 'src/repository/user.repository'
import { create, Whatsapp } from 'venom-bot'

dotenv.config()

interface IContent {
  title: string
  message: string
}

class SendWhatsApp {
  private client: Whatsapp

  constructor() {
    this.initialize()
  }

  public async sendMessage(number: string, title: string, message: string) {
    if (!isValidPhoneNumber(number, 'BR')) {
      throw new Error('This number is not valid')
    }

    const phoneNumber = parsePhoneNumber(number, 'BR')?.format('E.164').replace('+', '') as string
    const fone = phoneNumber.concat('+').concat('55').includes('@c.us') ? phoneNumber : `${phoneNumber}@c.us`

    const user = await userRepository.getByFone(number)
    if (!user) {
      throw new Error('Usuário não encontrado!')
    }

    const titlePattern = ` Ola! ${user.name}! 🥳🎉, 
    ${title} 
    ${message}.      
    São os votos da ${process.env.EQUIPE_USER} 🙌`

    const sendOk = await this.client.sendText(fone, titlePattern)
    if (!sendOk) {
      throw new Error('Não foi desssa vez')
    }

    const newPost: IPost = {
      title: title,
      content: message,
      userId: String(user._id),
    }
    await postRepository.create(newPost)
  }

  private initialize() {
    const status = (statusSession: string) => {
      console.log('status ==> ', status)
    }

    const start = (client: Whatsapp) => {
      this.client = client
    }

    create('sendMessage', status)
      .then(client => start(client))
      .catch(error => console.error(error))
  }
}
export default new SendWhatsApp()
