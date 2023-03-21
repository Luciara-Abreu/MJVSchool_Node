import UserClass from '../../domain/userClass'
import UserEntity from '../../entities/UserEntity'
import { IUserType } from '../../interfaces/IUser'
import UserRepository from '../../repository/userRepository'

const userRepository = new UserRepository()

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

    userRepository.salve(salveUser)

    return salveUser
  }
}

export default CreateUserService
