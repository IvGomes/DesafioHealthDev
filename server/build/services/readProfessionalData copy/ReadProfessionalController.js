"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadProfessionalDataController = void 0;
const ReadProfessionalData_1 = require("./ReadProfessionalData");
class ReadProfessionalDataController {
    async handle(request, response) {
        const userId = request.userId;
        const professionalData = new ReadProfessionalData_1.ReadProfessionalData();
        const result = await professionalData.execute({
            userId
        });
        return response.json(result);
    }
}
exports.ReadProfessionalDataController = ReadProfessionalDataController;
