"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const AuthenticateUser_1 = require("./AuthenticateUser");
class AuthenticateUserController {
    async handle(request, response) {
        const { username, password } = request.body;
        const authenticateUser = new AuthenticateUser_1.AuthenticateUser();
        const result = await authenticateUser.execute({
            username,
            password
        });
        return response.json(result);
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
