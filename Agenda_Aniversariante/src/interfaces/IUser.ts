interface IUserType {
  id?: number
  name: string
  birthDate: string
  sexualOrientation: string
  email: string
  lastEmail: string 
  fone: string
  avatar: string
}

 const initialDataUser: IUserType = {
  id: '',
  name: '',
  birthDate:'',
  sexualOrientation:'',
  email: '',
  lastEmail: '',
  fone: '',
  avatar: ''
}
export 
{
  IUserType,
  initialDataUser
}
