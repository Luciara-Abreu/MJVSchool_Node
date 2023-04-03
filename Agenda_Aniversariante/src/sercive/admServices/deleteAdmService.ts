import { AdmMock } from '../../config/admMock'

class DeleteAdmService {
  public execute(id: string) {
    const idAdm = AdmMock.findIndex(adm => adm.id === Number(id))
    if (idAdm === -1) {
      throw new Error('Administrador não encontrado 👻')
    }
    AdmMock.splice(idAdm)
  }
}
export default new DeleteAdmService()
