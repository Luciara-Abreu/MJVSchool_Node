import { Request, Response } from 'express'
import createAdmService from '../sercive/admServices/createAdmService'
import listAllAdmService from '../sercive/admServices/listAllAdmService'
import listOneAdmService from '../sercive/admServices/listOneAdmService'
import updateAdmService from '../sercive/admServices/updateAdmService'
import deleteAdmService from '../sercive/admServices/deleteAdmService'

class AdmController {
  public async createAdm(req: Request, res: Response) {
    try {
      const thisAdm = await createAdmService.execute(req.body)
      res.status(200).send({ message: 'Administrador add com sucesso! ', thisAdm })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async listAllAdms(req: Request, res: Response) {
    try {
      const showAdms = await listAllAdmService.execute()
      res.status(200).send({ message: 'Lista de Adiministradores ==>  ', showAdms })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async listOneAdm(req: Request, res: Response) {
    try {
      const adm = listOneAdmService.execute(req.params.id)
      res.status(200).send({ message: `Id pesquisado  ${req.params.id} ==>`, adm })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async updateAdm(req: Request, res: Response) {
    try {
      const user = updateAdmService.execute(req.params.id, req.body)
      res.status(200).send({ message: `Administrador atualizado com sucesso! ==> `, user })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      deleteAdmService.execute(req.params.id)
      res.status(200).send({ message: 'Administrador deletado com sucesso!' })
    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }
  }
}

export default new AdmController()
