import { IAdm } from "../interfaces/adm.interface"
import Adm from "../models/adm.model"

class AdmRepository {

getAll(){
  return Adm.find()
}

getById(id:string){
return Adm.findOne({_id: id})
}

getByName(name:string){
return Adm.findOne({name: name})
}

getByBirthDate(birthDate:string){
return Adm.findOne({birthDate: birthDate})
}

getByEmail(email:string){
return Adm.findOne({email: email})
}

/*create(adm: typeof Adm){
  return Adm.create(adm)
}*/
create({ name, birthDate, sexualOrientation, email, fone, avatar, password}: IAdm){
  return Adm.create({ 
    name, 
    birthDate,
    sexualOrientation,
    email,
    fone,
    avatar,
    password        
  })
}

update(id:string, adm: Partial<typeof Adm>){
  return Adm.updateOne({_id:id}, {$set:adm})
}

remove(id:string){
  return Adm.deleteOne({_id:id})
}

}

export default new AdmRepository()