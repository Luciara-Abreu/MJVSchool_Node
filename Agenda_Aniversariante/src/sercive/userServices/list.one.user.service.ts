import { UserMock } from '../../config/userMock'

class ListOneUserService {
  public execute(id: string) {
    const idUser = UserMock.find(user => user.id === Number(id))
    if (!idUser) {
      throw new Error('Usuário não encontrado 👻')
    }
    return idUser
  }
}
export default new ListOneUserService()
