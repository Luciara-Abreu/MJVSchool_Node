import UserRepository from '../../repository/userRepository'

class ListAllUserService {
  public execute() {
    const userRepo = new UserRepository()
    const listAllUser = userRepo.listAll()
    console.log('ListAllUser service ====>', listAllUser)
    return listAllUser
  }
}

export default ListAllUserService
