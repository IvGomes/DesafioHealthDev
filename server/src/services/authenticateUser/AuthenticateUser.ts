import { prisma } from '../../database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface AuthenticateUserProps {
  username: string
  password: string
}

export class AuthenticateUser {
  async execute({ username, password }: AuthenticateUserProps) {
    // Receber usuario e senha...

    // Verificar usuário (se já é cadastrado) no banco...
    const userFound = await prisma.user.findFirst({
      where: {
        username,
      },
    })

    if (!userFound) {
      throw new Error('Nome de usuário ou senha, inválidos!')
    }

    // Comparar senha com a do banco...
    const passwordCompare = await compare(password, userFound.password)

    if (!passwordCompare) {
      throw new Error('Nome de usuário ou senha, inválidos!')
    }

    // Gerar token JWT...
    const token = sign({ username }, 'valus', {
      subject: userFound.id,
      expiresIn: '1h',
    })

    return { id: userFound.id, user: userFound.username, token: token }
  }
}
