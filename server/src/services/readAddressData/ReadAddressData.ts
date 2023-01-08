import { prisma } from '../../database/prismaClient'


interface RequestBodyProps {
  userId: string
}

export class ReadAddressData {
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
    const findedAddressFormData = await prisma.addressData.findFirst({
      where: {
        userId: user.id,
      },
    })

    return findedAddressFormData
  }
}
