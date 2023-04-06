import User from "../models/user.model"


class UserRepository {

getAll(){
  return User.find()
}

getById(id:string){
return User.findOne({_id: id})
}

getByName(name:string){
return User.findOne({name: name})
}
getByBirthDate(birthDate:string){
return User.findOne({birthDate: birthDate})
}
getByEmail(email:string){
return User.findOne({email: email})
}

create(user: typeof User){
  return User.create(user)
}

update(id:string, user: Partial<typeof User>){
  return User.updateOne({_id:id}, {$set:user})
}

remove(id:string){
  return User.deleteOne({_id:id})
}

}

export default new UserRepository()