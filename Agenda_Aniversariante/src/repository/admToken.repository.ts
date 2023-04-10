import Token from '../models/adm.token.model'

class AdmTokenRepository {
  getFindByToken(token: string) {
    const admToken = Token.findOne({ token: token })
    return admToken
  }
  getUserId(_id: string) {
    return Token.find({ admId: _id })
  }
  async create(admId: string) {
    const admToken = await Token.create({ admId: admId })
    console.log('admToken ===> ', admToken)
    return admToken
  }
 
}

export default new AdmTokenRepository()
