import IAdm from '../interface/adm.interface'
import Adm from '../models/adm.model'

class AdmRepository {
  getAll() {
    return Adm.find()
  }

  getById(_id: string) {
    return Adm.findOne({ _id: _id })
  }
    
  getByEmail(email: string) {
    return Adm.findOne({ email: email })
  }
  getByName(name: string) {
    return Adm.findOne({ name: name })
  }


  create(adm: IAdm) {
    return Adm.create(adm)
  }

  update(_id: string, adm: Partial<IAdm>) {
    return Adm.updateOne({_id: _id },{$set: adm })
  }

  remove(_id: string) {
    return Adm.deleteOne({ _id })
  }
}
export default new AdmRepository()
