"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadGeneralDataController = void 0;
const ReadGeneralData_1 = require("./ReadGeneralData");
class ReadGeneralDataController {
    async handle(request, response) {
        const userId = request.userId;
        const generalData = new ReadGeneralData_1.ReadGeneralData();
        const result = await generalData.execute({
            userId
        });
        return response.json(result);
    }
}
exports.ReadGeneralDataController = ReadGeneralDataController;
