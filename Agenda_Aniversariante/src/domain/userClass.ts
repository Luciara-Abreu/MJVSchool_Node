import { IUserType } from "../interfaces/IUser"

class UserClass {
  name: string
  birthDate: string
  sexualOrientation: string
  email: string
  lastEmail: string | undefined
  fone: string
  avatar?: string
  
  constructor({name, birthDate, sexualOrientation, email, lastEmail, fone, avatar}: IUserType){
    this.name = name
    this.birthDate = birthDate
    this.sexualOrientation = sexualOrientation
    this.email = email
    this.lastEmail = lastEmail
    this.fone = fone
    this.avatar = avatar
  }
}

export default UserClass