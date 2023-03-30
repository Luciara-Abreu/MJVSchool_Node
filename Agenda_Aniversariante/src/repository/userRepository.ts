import { IUserType } from '../interfaces/IUser'

class UserRepository {
  public usuarios: IUserType[] = []

  public async adicionar({name, birthDate, sexualOrientation, email, lastEmail, fone, avatar }: IUserType) {
    const salveUser = await this.usuarios.push({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
    })
    console.log('usuários repository ===> ', this.usuarios)
    return salveUser
  }

  public async excluir(id: string) {
    const user = this.usuarios.findIndex(userId => userId.id === id)
    if (user === -1) {
      ;('User not found')
    } else {
      ;('User deleted successfully')
      this.usuarios.splice(user, 1)
    }
  }

  public async listar() {
    return this.usuarios
  }

  public async listarUm(id: string) {
    const user = this.usuarios.findIndex(userId => userId.id === id)
    if (user === -1) {
      ;('User not found')
    }
    return user
  }

  public async atualizar({ id, name, birthDate, sexualOrientation, email, lastEmail, fone, avatar }: IUserType) {
    const user = this.usuarios.findIndex(userId => userId.id === id)
    if (user === -1) {
      ;('User not found')
    } else {
      const salveUser = await this.usuarios.push({
        name,
        birthDate,
        sexualOrientation,
        email,
        lastEmail,
        fone,
        avatar,
      })
      return `updated user => ${salveUser}`
    }
  }
}

export default UserRepository
