"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAddressDataController = void 0;
const ReadAddressData_1 = require("./ReadAddressData");
class ReadAddressDataController {
    async handle(request, response) {
        const userId = request.userId;
        const addressData = new ReadAddressData_1.ReadAddressData();
        const result = await addressData.execute({
            userId
        });
        return response.json(result);
    }
}
exports.ReadAddressDataController = ReadAddressDataController;
