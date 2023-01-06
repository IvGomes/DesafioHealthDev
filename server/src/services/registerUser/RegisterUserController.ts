import {Request, Response} from 'express';
import { RegisterUser } from './RegisterUser';

export class RegisterUserController {
    async handle(request: Request, response: Response) {
        const {username, password} = request.body;

        const registerUser = new RegisterUser();
        const result = await registerUser.execute({
            username,
            password
        });

        return response.json(result);
    }
}