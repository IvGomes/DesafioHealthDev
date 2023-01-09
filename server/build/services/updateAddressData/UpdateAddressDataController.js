"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressDataController = void 0;
const UpdateAddressData_1 = require("./UpdateAddressData");
class UpdateAddressDataController {
    async handle(request, response) {
        const userId = request.userId;
        const requestBody = request.body;
        const addressData = new UpdateAddressData_1.UpdateAddressData();
        const result = await addressData.execute({
            userId,
            requestBody
        });
        return response.json(result);
    }
}
exports.UpdateAddressDataController = UpdateAddressDataController;
