import { Request, Response } from 'express'
import HelloWordService from "../service/helloWordService"

class HelloController {
  async Salutation(req: Request, res: Response) {
    const listSalutation = new HelloWordService()
    const showSalutation = await listSalutation.execute()
    return res.json(showSalutation)
  }
}

export default HelloController