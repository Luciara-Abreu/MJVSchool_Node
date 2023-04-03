import { UserMock } from '../../config/userMock'

class DeleteUserService {
  public execute(id: string) {
    const idUser = UserMock.findIndex(user => user.id === Number(id))
    if (idUser === -1) {
      throw new Error('Usuário não encontrado 👻')
    }
    UserMock.splice(idUser)
  }
}
export default new DeleteUserService()
