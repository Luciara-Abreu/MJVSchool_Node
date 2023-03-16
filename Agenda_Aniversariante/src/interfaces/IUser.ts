interface IUserType {
  id?: string
  name: string
  birthDate: Date
  sexualOrientation: string
  email: string
  lastEmail: string | undefined
  fone: string
  avatar?: string
}

export default IUserType
