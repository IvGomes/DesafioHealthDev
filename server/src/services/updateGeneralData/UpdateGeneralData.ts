import { prisma } from '../../database/prismaClient'

export interface GeneralDataProps {
  birth?: string
  cns?: string
  cpf?: string
  email?: string
  fullName?: string
  gender?: string
  phone?: string
  rg?: string
}

interface RequestBodyProps {
  userId: string
  requestBody?: GeneralDataProps
}

export class UpdateGeneralData {
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
    const generalDataId = await prisma.generalData.findFirst({
      where: {
        userId
      }
    })

    // Atualiza as informações no banco
    const updatedGeneralFormData = await prisma.generalData.update({
      where: { id: generalDataId?.id },
      data: { ...requestBody }
    })

    return updatedGeneralFormData
  }
}
