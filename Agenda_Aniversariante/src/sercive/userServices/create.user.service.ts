import { UserMock } from '../../config/userMock'
import { IUserType } from '../../interfaces/IUser'
import UserModel from '../../model/user.model'

class CreateUserService {
  public async execute(newUSer: IUserType): Promise<UserModel> {
      const userId = UserMock.find(user => user.id === newUSer.id)
    if (userId) {
      throw new Error('Usuário já cadastrado')
    }
    await UserMock.push(newUSer)
    return newUSer
  }
}
export default new CreateUserService()