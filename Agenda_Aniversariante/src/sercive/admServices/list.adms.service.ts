import { AdmMock } from '../../config/admMock'

class ListAllAdmService {
  public execute() {
    if (AdmMock === null) {
      throw new Error('A lista de Administrador está vazia!! 👻')
    }
    return AdmMock
  }
}

export default new ListAllAdmService()
