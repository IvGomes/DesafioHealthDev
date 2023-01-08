import { prisma } from '../../database/prismaClient'

export interface GeneralDataProps {
  birth: string
  cns: string
  cpf: string
  email: string
  fullName: string
  gender: string
  phone: string
  rg: string
}

interface RequestBodyProps {
  userId: string
  requestBody: GeneralDataProps
}

export class CreateGeneralData {
  async execute({ userId, requestBody }: RequestBodyProps) {
    // Verifica se usuário existe...
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    })

    if(!user) {
        throw new Error("Usuário não encontrado...");
    }

    // Cria e salva as informações no banco
    const createdGeneralFormData = await prisma.generalData.create({
        data: {
            userId: user.id,
            ...requestBody
        }        
    })

    return createdGeneralFormData
  }
}
