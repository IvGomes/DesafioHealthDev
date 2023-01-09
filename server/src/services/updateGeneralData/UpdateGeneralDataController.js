"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeneralDataController = void 0;
const UpdateGeneralData_1 = require("./UpdateGeneralData");
class UpdateGeneralDataController {
    async handle(request, response) {
        const userId = request.userId;
        const requestBody = request.body;
        const generalData = new UpdateGeneralData_1.UpdateGeneralData();
        const result = await generalData.execute({
            userId,
            requestBody
        });
        return response.json(result);
    }
}
exports.UpdateGeneralDataController = UpdateGeneralDataController;
