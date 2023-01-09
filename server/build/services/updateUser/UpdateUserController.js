"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const UpdateUser_1 = require("./UpdateUser");
class UpdateUserController {
    async handle(request, response) {
        const userId = request.userId;
        const requestBody = request.body;
        const userData = new UpdateUser_1.UpdateUser();
        const result = await userData.execute({
            userId,
            requestBody
        });
        return response.json(result);
    }
}
exports.UpdateUserController = UpdateUserController;
