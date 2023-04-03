import { AdmMock } from '../../config/admMock'
import { IAdmType } from '../../interfaces/IAdm'
import AdmModel from '../../model/adm.model'


class CreateAdmService{
  public async execute(newAdm: IAdmType): Promise<AdmModel> {
      const admId = AdmMock.find(adm => adm.id === newAdm.id)
    if (admId) {
      throw new Error('Administrador já cadastrado')
    }
    await AdmMock.push(newAdm)
    return newAdm
  }
}
export default new CreateAdmService()