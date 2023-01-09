"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfessionalDataController = void 0;
const UpdateProfessionalData_1 = require("./UpdateProfessionalData");
class UpdateProfessionalDataController {
    async handle(request, response) {
        const userId = request.userId;
        const requestBody = request.body;
        const professionalData = new UpdateProfessionalData_1.UpdateProfessionalData();
        const result = await professionalData.execute({
            userId,
            requestBody
        });
        return response.json(result);
    }
}
exports.UpdateProfessionalDataController = UpdateProfessionalDataController;
