import { Router } from 'express';
import { verifyAuthenticateToken } from './middlewares/verifyAuthenticateToken';
import { AuthenticateUserController } from './services/authenticateUser/AuthenticateUserController';
import { RegisterUserController } from './services/registerUser/RegisterUserController';

import { CreateGeneralDataController } from './services/createGeneralData/CreateGeneralDataController';
import { ReadGeneralDataController } from './services/readGeneralData/ReadGeneralDataController';
import { UpdateGeneralDataController } from './services/updateGeneralData/UpdateGeneralDataController';
import { ReadAddressDataController } from './services/readAddressData/ReadAddressController';
import { UpdateAddressDataController } from './services/updateAddressData/UpdateAddressDataController';
import { UpdateUserController } from './services/updateUser/UpdateUserController';
import { ReadProfessionalDataController } from './services/readProfessionalData copy/ReadProfessionalController';
import { UpdateProfessionalDataController } from './services/updateProfessionalData/UpdateProfessionalDataController';

const routes = Router();

const registerUserController = new RegisterUserController();
const updateUserController = new UpdateUserController();
const authenticateUserController = new AuthenticateUserController();

const createGeneralDataController = new CreateGeneralDataController();
const readGeneralDataController = new ReadGeneralDataController();
const updateGeneralDataController = new UpdateGeneralDataController();

const readAddressDataController = new ReadAddressDataController();
const updateAddressDataController = new UpdateAddressDataController();

const readProfessionalDataController = new ReadProfessionalDataController();
const updateProfessionalDataController = new UpdateProfessionalDataController();


routes.post('/users', registerUserController.handle)
routes.put('/users', verifyAuthenticateToken, updateUserController.handle)
routes.post('/login', authenticateUserController.handle)

routes.get('/generaldata', verifyAuthenticateToken, readGeneralDataController.handle)
routes.post('/generaldata', verifyAuthenticateToken, createGeneralDataController.handle)
routes.put('/generaldata', verifyAuthenticateToken, updateGeneralDataController.handle)

routes.get('/addressdata', verifyAuthenticateToken, readAddressDataController.handle)
routes.put('/addressdata', verifyAuthenticateToken, updateAddressDataController.handle)

routes.get('/professionaldata', verifyAuthenticateToken, readProfessionalDataController.handle)
routes.put('/professionaldata', verifyAuthenticateToken, updateProfessionalDataController.handle)

export { routes }
