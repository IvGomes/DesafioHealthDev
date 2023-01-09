"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const bcrypt_1 = require("bcrypt");
class RegisterUser {
    async execute({ username, password }) {
        // Verificar se usuário existe...
        const userExist = await prismaClient_1.prisma.user.findFirst({
            where: {
                username,
            },
        });
        if (userExist) {
            throw new Error('Nome de usuário já cadastrado!');
        }
        // Criptografa...
        const hashPassword = await (0, bcrypt_1.hash)(password, 10);
        // Add DB
        const newUser = await prismaClient_1.prisma.user.create({
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
        });
        return newUser;
    }
}
exports.RegisterUser = RegisterUser;
