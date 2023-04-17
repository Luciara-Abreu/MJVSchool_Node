export interface IToken {
  token: string
  admId: string
  createdAt?: Date 
  updatedAt?: Date 
}

// Reset de senha

export interface IResetPassword {
  token: string
  password: string
}