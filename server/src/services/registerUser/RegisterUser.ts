import { prisma } from '../../database/prismaClient'
import { hash } from 'bcrypt'

interface RegisterUserProps {
  username: string;
  password: string;
}

export class RegisterUser {
  async execute({ username, password }: RegisterUserProps) {
    // Verificar se usuário existe...
    const userExist = await prisma.user.findFirst({
      where: {
        username,
      },
    })

    if (userExist) {
      throw new Error('Nome de usuário já cadastrado!')
    }

    // Criptografa...
    const hashPassword = await hash(password, 10)

    // Add DB
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        GeneralData: {
          create: {
            birth: '',
            cns: '',
            cpf: '',
            email: '',
            fullName: '',
            gender: '',
            phone: '',
            rg: '',
          },
        },
        AddressData: {
            create: {
                bairro: "",
                municipio: "",
                numero: "",
                uf: "",
                complemento: "",
                logradouro: ""
            }
        },
        ProfessionalData: {
            create: {
                crm: "",
                especialidade: "",
                memed: false,
                numeroConselho: "",
                rqe: "",
                ufConselho: "",
                idUser: ""
            }
        }
      },
    })

    return newUser
  }
}
