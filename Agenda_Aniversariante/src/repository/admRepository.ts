import Adm from "../entities/admEntity";
import {  IUserType } from "../interfaces/IUser"

class admRepository  { 
  adms = []

    constructor(){
      this.adms =  []
    }

    create(adm:any){
      return adm
    }
    listarAll(){
      return this.adms

    }
    delete(id:any){

    }
    update(id:any){

    }
    listarOne(id:any){

    }
   




    findOneBy(id: string) {
      throw new Error("Method not implemented.");
    }

    async findById(id: string) {
      const adm = await this.findOneBy(id)
      return adm
    }

 
}

export default admRepository


