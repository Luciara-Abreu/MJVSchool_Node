import { Request, Response } from 'express'
import CreateUserService from '../sercive/userServices/createUserService'

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
      avatar,
    })
    return res.json(thisUser)
  }


  
}

export default UserController
