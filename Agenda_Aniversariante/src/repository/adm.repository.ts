import { IAdm } from '../interfaces/adm.interface'
import Adm from '../models/adm.model'

class AdmRepository {
  getAll() {
    return Adm.find()
  }

  getById(_id: string) {
    return Adm.findOne({ _id: _id })
  }

  getByName(name: string) {
    return Adm.findOne({ name: name })
  }

  getByBirthDate(birthDate: string) {
    return Adm.findOne({ birthDate: birthDate })
  }

  getByEmail(email: string) {
    return Adm.findOne({ email: email })
  }

  create(adm: IAdm) {
    return Adm.create(adm)
  }

  update(_id: string, adm: Partial<IAdm>) {
    return Adm.updateOne({ _id: _id }, { $set: adm })
  }

  remove(id: string) {
    return Adm.deleteOne({ _id: id })
  }
}

export default new AdmRepository()
