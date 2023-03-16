import IUserType from '../../interfaces/IUser'
import UserModel from '../../entities/UserModel'

class CreateUserService {
  public async execute({ name, birthDate, sexualOrientation, email, lastEmail, fone, avatar }: IUserType) {
    const salveUser = await UserModel.create({
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
