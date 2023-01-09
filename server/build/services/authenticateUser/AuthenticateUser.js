"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUser = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUser {
    async execute({ username, password }) {
        // Receber usuario e senha...
        // Verificar usuário (se já é cadastrado) no banco...
        const userFound = await prismaClient_1.prisma.user.findFirst({
            where: {
                username,
            },
        });
        if (!userFound) {
            throw new Error('Nome de usuário ou senha, inválidos!');
        }
        // Comparar senha com a do banco...
        const passwordCompare = await (0, bcrypt_1.compare)(password, userFound.password);
        if (!passwordCompare) {
            throw new Error('Nome de usuário ou senha, inválidos!');
        }
        // Gerar token JWT...
        const token = (0, jsonwebtoken_1.sign)({ username }, 'valus', {
            subject: userFound.id,
            expiresIn: '1h',
        });
        return { id: userFound.id, user: userFound.username, token: token };
    }
}
exports.AuthenticateUser = AuthenticateUser;
