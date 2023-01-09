"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAddressData = void 0;
const prismaClient_1 = require("../../database/prismaClient");
class ReadAddressData {
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
        const findedAddressFormData = await prismaClient_1.prisma.addressData.findFirst({
            where: {
                userId: user.id,
            },
        });
        return findedAddressFormData;
    }
}
exports.ReadAddressData = ReadAddressData;
