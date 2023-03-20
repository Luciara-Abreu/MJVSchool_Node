//Objeto que contem os dados do ADM

import { IAdmType } from "../interfaces/IAdm"



class AdmClass{
  constructor({ name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password }: IAdmType) {
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

export default AdmClass
