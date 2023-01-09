"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGeneralDataController = void 0;
const CreateGeneralData_1 = require("./CreateGeneralData");
class CreateGeneralDataController {
    async handle(request, response) {
        const userId = request.userId;
        const requestBody = request.body;
        const generalData = new CreateGeneralData_1.CreateGeneralData();
        const result = await generalData.execute({
            userId,
            requestBody
        });
        return response.json(result);
    }
}
exports.CreateGeneralDataController = CreateGeneralDataController;
