"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const bcrypt_1 = require("bcrypt");
class UpdateUser {
    async execute({ userId, requestBody }) {
        const { password, username } = requestBody;
        // Verifica se usuário existe...
        const user = await prismaClient_1.prisma.user.findFirst({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new Error('Usuário não encontrado...');
        }
        // Atualiza password no banco...
        if (password) {
            const hashPassword = await (0, bcrypt_1.hash)(password, 10);
            const updatedUser = await prismaClient_1.prisma.user.update({
                where: { id: user.id },
                data: { password: hashPassword, username: username },
            });
            return updatedUser;
        }
    }
}
exports.UpdateUser = UpdateUser;
