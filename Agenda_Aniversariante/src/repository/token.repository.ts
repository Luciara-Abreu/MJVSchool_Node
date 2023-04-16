import { IToken } from 'src/interfaces/token.interface'
import Token from 'src/models/token.model'

class TokenRepository {

 //pegar o tokne
  getByToken(token: string) {
    return Token.findOne({ token: token})
  }

  //salvar o token no repositório
  Salve(token: IToken) {
    return Token.create(token)
  }
}

export default new TokenRepository()