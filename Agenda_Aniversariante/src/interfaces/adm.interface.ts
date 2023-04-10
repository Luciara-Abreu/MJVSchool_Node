import Adm from "../models/adm.model"

export interface IAdm {
  name: string, 
  birthDate: Date, 
  sexualOrientation: string
  email: string, 
  fone: string
  avatar: string
  password: string
}

export interface IAuthType {
  email: string
  password: string
}

export interface IResponse {
  adm: typeof Adm
  token: string
}
