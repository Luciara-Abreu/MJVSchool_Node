import { IToken } from 'src/interfaces/token.interface'
import Token from 'src/models/token.model'

class TokenRepository {
  //pegar o token
  getByToken(token: IToken) {
    return Token.findOne({ token: token })
  }
  //pegar o token
  getByNewToken(token: string) {
    const newToken = Token.findOne().sort({ createdAt: 'desc' })
    return newToken
  }
  //pegar o token
  getByAdmId(admId: string) {
    return Token.findOne({ admId: admId })
  }

  //salvar o token no repositório
  SalveToken(token: IToken) {
    return Token.create(token)
  }
}

export default new TokenRepository()
