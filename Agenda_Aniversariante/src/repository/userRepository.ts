class UserRepository  { 
  users = []

    constructor(){
      this.users =  []
    }

    create(user:any){
      return user
    }

    listAll(){
      return this.users
    }

    delete(id:any){
    }

    update(id:any){
    }

    listarOne(id:any){
    }
    
}

export default UserRepository


