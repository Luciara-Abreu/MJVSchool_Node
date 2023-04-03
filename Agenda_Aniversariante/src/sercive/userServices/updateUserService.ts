import { UserMock } from '../../config/userMock'
import UserModel from '../../model/userModel'

class UpdateUserService {
  public execute(id: string, user: Partial<UserModel>) {
    const idUser = UserMock.findIndex(user => user.id === Number(id))
    if (idUser === -1) {
      throw new Error('Usuário não encontrado 👻')
    }
    const updateData = {
      ...UserMock[idUser],
      ...user,
    }
    const userUpdate = (UserMock[idUser] = updateData)
    return userUpdate
  }
}
export default new UpdateUserService()
