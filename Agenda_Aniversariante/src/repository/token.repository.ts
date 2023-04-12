import Token from '../models/adm.token.model'

class TokenRepository {
  getFindByToken(token: string) {
    const admToken = Token.findOne({ token: token })
    return admToken
  }
  getUserId(_id: string) {
    return Token.find({ admId: _id })
  }
  async create(admId: string, token: string) {
    const admToken = await Token.create({ admId: admId, token: token })
    return Token.create(admToken)
    }  

    public async generate(admId: string) {
      const admToken = await Token.create({ admId: admId });
      return admToken;
    }
  }

export default new TokenRepository()
