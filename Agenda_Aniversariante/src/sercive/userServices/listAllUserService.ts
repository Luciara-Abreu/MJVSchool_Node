import UserEntity from "../../entities/UserEntity"

class ListAllUserService {
  public execute() {
    const userRepo = new UserEntity()
    const listAllUser = userRepo
    console.log('ListAllUser service ====>', listAllUser)
    return listAllUser
  }
}

export default ListAllUserService
