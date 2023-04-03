import { UserMock } from '../../config/userMock'

class ListAllUserService {
  public execute() {
    if (UserMock === null) {
      throw new Error('não existe produtos na lista 👻')
    }
    return UserMock
  }
}

export default new ListAllUserService()
