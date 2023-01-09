"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeneralData = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class UpdateGeneralData {
    async execute({ userId, requestBody }) {
        // Verifica se usuário existe...
        const user = await prismaClient_1.prisma.user.findFirst({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new Error('Usuário não encontrado...');
        }
        // Pega generalFormData ID do usuário
        const generalDataId = await prismaClient_1.prisma.generalData.findFirst({
            where: {
                userId
            }
        });
        // Atualiza as informações no banco
        const updatedGeneralFormData = await prismaClient_1.prisma.generalData.update({
            where: { id: generalDataId?.id },
            data: { ...requestBody }
        });
        return updatedGeneralFormData;
    }
}
exports.UpdateGeneralData = UpdateGeneralData;
