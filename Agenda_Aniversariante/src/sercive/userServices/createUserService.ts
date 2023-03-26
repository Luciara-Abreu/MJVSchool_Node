import UserEntity from '../../entities/UserEntity'
import { IUserType } from '../../interfaces/IUser'

class CreateUserService {
  public async execute({ name, birthDate, sexualOrientation, email, lastEmail, fone, avatar }: IUserType) {
    const salveUser = await UserEntity.create({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
    })
    return salveUser
  }
}

export default CreateUserService
