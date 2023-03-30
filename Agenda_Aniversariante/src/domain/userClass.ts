import { IUserType } from "../interfaces/IUser"

class UserClass {  
  
  constructor({id, name, birthDate, sexualOrientation, email, lastEmail, fone, avatar}: IUserType){
    id = id
    name = name
    birthDate = birthDate
    sexualOrientation = sexualOrientation
    email = email
    lastEmail = lastEmail
    fone = fone
    avatar = avatar
  }
}

export default UserClass