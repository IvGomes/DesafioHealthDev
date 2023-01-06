import { Router } from 'express';
import { AuthenticateUserController } from './services/authenticateUser/AuthenticateUserController';
import { RegisterUserController } from './services/registerUser/RegisterUserController';

const routes = Router();

const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post('/users', registerUserController.handle)
routes.post('/login', authenticateUserController.handle)

export { routes }
