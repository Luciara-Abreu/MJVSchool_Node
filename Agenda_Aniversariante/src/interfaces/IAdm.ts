import { IUserType } from './IUser'

interface IAdmType extends IUserType {
  password: string
}

const initialDataAdm: IAdmType = {
  id: 0,
  name: '',
  birthDate: '',
  sexualOrientation: '',
  email: '',
  lastEmail: '',
  fone: '',
  avatar: '',
  password: ''
}

export { IAdmType, initialDataAdm }
