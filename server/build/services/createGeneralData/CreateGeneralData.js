"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGeneralData = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class CreateGeneralData {
    async execute({ userId, requestBody }) {
        // Verifica se usuário existe...
        const user = await prismaClient_1.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!user) {
            throw new Error("Usuário não encontrado...");
        }
        // Cria e salva as informações no banco
        const createdGeneralFormData = await prismaClient_1.prisma.generalData.create({
            data: {
                userId: user.id,
                ...requestBody
            }
        });
        return createdGeneralFormData;
    }
}
exports.CreateGeneralData = CreateGeneralData;
