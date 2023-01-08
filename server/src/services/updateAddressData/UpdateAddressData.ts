import { prisma } from '../../database/prismaClient'

export interface AddressDataProps {
  bairro: string
  complemento: string
  logradouro: string
  municipio: string
  numero: string
  uf: string
}

interface RequestBodyProps {
  userId: string
  requestBody?: AddressDataProps
}

export class UpdateAddressData {
  async execute({ userId, requestBody }: RequestBodyProps) {
    // Verifica se usuário existe...
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new Error('Usuário não encontrado...')
    }

    // Pega generalFormData ID do usuário
    const addressDataId = await prisma.addressData.findFirst({
      where: {
        userId,
      },
    })

    // Atualiza as informações no banco
    const updatedAddressFormData = await prisma.addressData.update({
      where: { id: addressDataId?.id },
      data: { ...requestBody },
    })

    return updatedAddressFormData
  }
}
