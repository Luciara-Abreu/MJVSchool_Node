import { initialDataUser, IUserType } from './IUser'

interface IAdmType extends IUserType {
  password: string
  old_password?: string
}

const initialDataAdm: IAdmType = {
  id: '',
  name: '',
  birthDate: '',
  sexualOrientation: '',
  email: '',
  lastEmail: '',
  fone: '',
  avatar: '',
  password: '',
  old_password: '',
}

export { IAdmType, initialDataAdm }
