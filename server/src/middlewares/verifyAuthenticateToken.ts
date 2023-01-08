import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export async function verifyAuthenticateToken(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token não encontrado...',
    })
  }

  const [, token] = authHeader.split(' ')

  try {
    jwt.verify(token, 'valus', (error, decoded) => {
      if (error) {
        return response.status(401).send({ message: 'Token inválido' })
      }

      if(typeof decoded?.sub === 'string') return request.userId = decoded?.sub;
    })
    return next()
  } catch (error) {
    return response.status(401).json({
      message: 'Token inválido ou expirado...',
    })
  }
}
