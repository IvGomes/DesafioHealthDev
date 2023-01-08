import { prisma } from '../../database/prismaClient';
import { hash } from 'bcrypt';

export interface UserDataProps {
  username?: string;
  password: string;
}

interface RequestBodyProps {
  userId: string
  requestBody: UserDataProps
}

export class UpdateUser {
  async execute({ userId, requestBody }: RequestBodyProps) {
    const {password, username} = requestBody;
    // Verifica se usuário existe...
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new Error('Usuário não encontrado...')
    }

    // Atualiza password no banco...
    if(password) {
      const hashPassword = await hash(password, 10);
      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { password: hashPassword, username: username },
      })

      return updatedUser;
    
    }

  }
}
