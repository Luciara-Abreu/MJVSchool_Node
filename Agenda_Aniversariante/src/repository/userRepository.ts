class UserRepository {
  users: string[] = []

  constructor() {
    this.users = []
  }

  public salve(user: any) {
    console.log('userRepository ==> ', user)
    this.users.push(user)
  }

  listAll() {
    return this.users
  }

  delete(id: any) {}

  update(id: any) {}

  listarOne(id: any) {}
}

export default UserRepository
