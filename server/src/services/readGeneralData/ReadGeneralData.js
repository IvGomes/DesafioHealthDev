"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadGeneralData = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class ReadGeneralData {
    async execute({ userId }) {
        // Verifica se usuário existe...
        const user = await prismaClient_1.prisma.user.findFirst({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new Error('Usuário não encontrado...');
        }
        // Cria e salva as informações no banco
        const findedGeneralFormData = await prismaClient_1.prisma.generalData.findFirst({
            where: {
                userId: user.id,
            },
        });
        return findedGeneralFormData;
    }
}
exports.ReadGeneralData = ReadGeneralData;
