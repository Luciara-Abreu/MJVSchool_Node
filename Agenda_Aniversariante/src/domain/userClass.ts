import { IUserType } from "../interfaces/IUser"

class UserClass {  
  
  constructor({name, birthDate, sexualOrientation, email, lastEmail, fone, avatar}: IUserType){
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