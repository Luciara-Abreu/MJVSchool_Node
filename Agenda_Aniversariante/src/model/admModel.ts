//Objeto que contem os dados do ADM

import { IAdmType } from "../interfaces/IAdm"
import UserModel from "./userModel"

class AdmModel extends UserModel{
  constructor({id, name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password}: IAdmType) {
    super({id, name, birthDate, sexualOrientation, email, lastEmail, fone, avatar})
    id = id
    name = name
    birthDate = birthDate
    sexualOrientation = sexualOrientation
    email = email
    lastEmail = lastEmail
    fone = fone
    avatar = avatar
    password = password
  }
}

export default AdmModel
