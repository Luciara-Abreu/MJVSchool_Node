
export interface IPost {
  title: string
  content: string
  userId: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IToEmail {
  email:string
  title: string
  content: string   
}