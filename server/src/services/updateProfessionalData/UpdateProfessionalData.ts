import { prisma } from '../../database/prismaClient'

export interface ProfessionalDataProps {
  crm: string;
  especialidade: string;
  idUser: string;
  numeroConselho: string;
  rqe: string;
  ufConselho: string;
  memed: false
}

interface RequestBodyProps {
  userId: string
  requestBody?: ProfessionalDataProps
}

export class UpdateProfessionalData {
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

    // Pega professionalFormData ID do usuário
    const professionalDataId = await prisma.professionalData.findFirst({
      where: {
        userId
      }
    })

    // Atualiza as informações no banco
    const updatedProfessionalFormData = await prisma.professionalData.update({
      where: { id: professionalDataId?.id },
      data: { ...requestBody }
    })

    return updatedProfessionalFormData
  }
}
