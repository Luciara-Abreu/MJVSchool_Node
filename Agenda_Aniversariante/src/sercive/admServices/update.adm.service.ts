import { AdmMock } from '../../config/admMock'
import AdmModel from '../../model/adm.model'


class UpdateUserService {
  public execute(id: string, adm: Partial<AdmModel>) {
    const idAdm = AdmMock.findIndex(adm => adm.id === Number(id))
    if (idAdm === -1) {
      throw new Error('Administrador não encontrado 👻')
    }
    const updateData = {
      ...AdmMock[idAdm],
      ...adm,
    }
    const admUpdate = (AdmMock[idAdm] = updateData)
    return admUpdate
  }
}
export default new UpdateUserService()
