import { IUser } from 'src/interfaces/user.interface'
import User from '../models/user.model'

class UserRepository {
  getAll() {
    return User.find()
  }

  getById(_id: string) {
    return User.findOne({ _id: _id })
  }

  getByName(name: string) {
    return User.findOne({ name: name })
  }
  getByBirthDate(birthDate: string) {
    return User.findOne({ birthDate: birthDate })
  }
  getByEmail(email: string) {
    return User.findOne({ email: email })
  }

  create(user: IUser) {
    return User.create(user)
  }

  update(_id: string, user: Partial<IUser>) {
    return User.updateOne({ _id: _id }, { $set: user })
  }

  remove(id: string) {
    return User.deleteOne({ _id: id })
  }
}

export default new UserRepository()
