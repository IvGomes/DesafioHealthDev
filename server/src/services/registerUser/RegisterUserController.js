"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserController = void 0;
const RegisterUser_1 = require("./RegisterUser");
class RegisterUserController {
    async handle(request, response) {
        const { username, password } = request.body;
        const registerUser = new RegisterUser_1.RegisterUser();
        const result = await registerUser.execute({
            username,
            password
        });
        return response.json(result);
    }
}
exports.RegisterUserController = RegisterUserController;
