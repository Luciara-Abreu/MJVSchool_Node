import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'

interface ITokenPayload {
  iat: number
  exp: number
  id: string
  name: string
}

function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('JWT Token is missing.')
  }

  const [, token] = authHeader.split(' ')

  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret)
    const { name, id } = decodedToken as ITokenPayload

    req.adm = {
      id: id,
      name: name,
    }

    return next()
  } catch (error: any) {
      res.status(400).send({ message: 'Invalid JWT Token' })
  }
}
export default isAuthenticated
