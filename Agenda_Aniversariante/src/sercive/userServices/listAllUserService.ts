import UserRepository from '../../repository/userRepository'

class ListAllUserService {
  public execute() {
    const userRepo = new UserRepository()
    const listAllUser = userRepo.listAll()

    console.log('userService ->', listAllUser)
    return listAllUser
  }
}

export default ListAllUserService
