import { AdmMock } from '../../config/admMock'

class ListOneUserService {
  public execute(id: string) {
    const idAdm = AdmMock.find(adm => adm.id === Number(id))
    if (!idAdm) {
      throw new Error('Administrador não encontrado 👻')
    }
    return idAdm
  }
}
export default new ListOneUserService()
