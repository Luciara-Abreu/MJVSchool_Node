import admRepository from '../repository/adm.repository'
import admTokenRepository from '../repository/admToken.repository'

class SendForgottenPasswordService {
  async create(email: string) {
    const user = await admRepository.getByEmail(email)
    if (!user) {
      throw new Error('Administrador não encontrado 👻')
    }
    const token = await admTokenRepository.create(user.id)
    console.log('Olha o token ====> ', token)
    return token
  }
}
export default new SendForgottenPasswordService()
