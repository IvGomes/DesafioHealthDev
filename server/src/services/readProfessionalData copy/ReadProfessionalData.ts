import { prisma } from '../../database/prismaClient'


interface RequestBodyProps {
  userId: string
}

export class ReadProfessionalData {
  async execute({ userId }: RequestBodyProps) {
    // Verifica se usuário existe...
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new Error('Usuário não encontrado...')
    }

    // Cria e salva as informações no banco
    const findedProfessionalFormData = await prisma.professionalData.findFirst({
      where: {
        userId: user.id,
      },
    })

    return findedProfessionalFormData
  }
}
