import { Router } from 'express';
import { verifyAuthenticateToken } from './middlewares/verifyAuthenticateToken';
import { AuthenticateUserController } from './services/authenticateUser/AuthenticateUserController';
import { RegisterUserController } from './services/registerUser/RegisterUserController';

import { CreateGeneralDataController } from './services/createGeneralData/CreateGeneralDataController';
import { ReadGeneralDataController } from './services/readGeneralData/ReadGeneralDataController';
import { UpdateGeneralDataController } from './services/updateGeneralData/UpdateGeneralDataController';

const routes = Router();

const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();
const createGeneralDataController = new CreateGeneralDataController();
const readGeneralDataController = new ReadGeneralDataController();
const updateGeneralDataController = new UpdateGeneralDataController();

routes.post('/users', registerUserController.handle)
routes.post('/login', authenticateUserController.handle)

routes.get('/generaldata', verifyAuthenticateToken, readGeneralDataController.handle)
routes.post('/generaldata', verifyAuthenticateToken, createGeneralDataController.handle)
routes.put('/generaldata', verifyAuthenticateToken, updateGeneralDataController.handle)

export { routes }
