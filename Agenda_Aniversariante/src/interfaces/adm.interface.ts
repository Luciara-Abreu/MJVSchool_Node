import Adm from "../models/adm.model"
import { IUser } from "./user.interface"

export interface IAdm extends IUser{
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
