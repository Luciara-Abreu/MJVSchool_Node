import { Request, Response } from 'express'
import CreateUserService from '../sercive/userServices/createUserService'
import ListAllUserService from '../sercive/userServices/listAllUserService'


class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {

    const { name, birthDate, sexualOrientation, email, lastEmail, fone, avatar } = req.body
    const addneWUser = new CreateUserService()
    const thisUser = await addneWUser.execute({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar
    })
  return res.json(thisUser)
  }

  public async listAllUsers(req: Request, res: Response) {
    const listUsers = new ListAllUserService()
    const showUsers = await listUsers.execute()
    //console.log('userController==> ', showUsers)
    return res.json(showUsers)
  }
}

export default UserController
