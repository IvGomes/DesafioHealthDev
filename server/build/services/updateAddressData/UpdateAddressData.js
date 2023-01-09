"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressData = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class UpdateAddressData {
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
        const addressDataId = await prismaClient_1.prisma.addressData.findFirst({
            where: {
                userId,
            },
        });
        // Atualiza as informações no banco
        const updatedAddressFormData = await prismaClient_1.prisma.addressData.update({
            where: { id: addressDataId?.id },
            data: { ...requestBody },
        });
        return updatedAddressFormData;
    }
}
exports.UpdateAddressData = UpdateAddressData;
