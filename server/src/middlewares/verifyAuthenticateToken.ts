import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface PayloadProps {
    sub: string;
}

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

    const { sub } = verify(token, 'valus') as PayloadProps;

    request.userId = sub;

    return next()

  } catch (error) {

    return response.status(401).json({
      message: 'Token inválido ou expirado...',
    })
    
  }
}
