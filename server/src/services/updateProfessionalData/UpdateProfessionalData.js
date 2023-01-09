"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfessionalData = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class UpdateProfessionalData {
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
        // Pega professionalFormData ID do usuário
        const professionalDataId = await prismaClient_1.prisma.professionalData.findFirst({
            where: {
                userId
            }
        });
        // Atualiza as informações no banco
        const updatedProfessionalFormData = await prismaClient_1.prisma.professionalData.update({
            where: { id: professionalDataId?.id },
            data: { ...requestBody }
        });
        return updatedProfessionalFormData;
    }
}
exports.UpdateProfessionalData = UpdateProfessionalData;
