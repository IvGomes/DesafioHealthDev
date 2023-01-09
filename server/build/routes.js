"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const verifyAuthenticateToken_1 = require("./middlewares/verifyAuthenticateToken");
const AuthenticateUserController_1 = require("./services/authenticateUser/AuthenticateUserController");
const RegisterUserController_1 = require("./services/registerUser/RegisterUserController");
const CreateGeneralDataController_1 = require("./services/createGeneralData/CreateGeneralDataController");
const ReadGeneralDataController_1 = require("./services/readGeneralData/ReadGeneralDataController");
const UpdateGeneralDataController_1 = require("./services/updateGeneralData/UpdateGeneralDataController");
const ReadAddressController_1 = require("./services/readAddressData/ReadAddressController");
const UpdateAddressDataController_1 = require("./services/updateAddressData/UpdateAddressDataController");
const UpdateUserController_1 = require("./services/updateUser/UpdateUserController");
const ReadProfessionalController_1 = require("./services/readProfessionalData copy/ReadProfessionalController");
const UpdateProfessionalDataController_1 = require("./services/updateProfessionalData/UpdateProfessionalDataController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const registerUserController = new RegisterUserController_1.RegisterUserController();
const updateUserController = new UpdateUserController_1.UpdateUserController();
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
const createGeneralDataController = new CreateGeneralDataController_1.CreateGeneralDataController();
const readGeneralDataController = new ReadGeneralDataController_1.ReadGeneralDataController();
const updateGeneralDataController = new UpdateGeneralDataController_1.UpdateGeneralDataController();
const readAddressDataController = new ReadAddressController_1.ReadAddressDataController();
const updateAddressDataController = new UpdateAddressDataController_1.UpdateAddressDataController();
const readProfessionalDataController = new ReadProfessionalController_1.ReadProfessionalDataController();
const updateProfessionalDataController = new UpdateProfessionalDataController_1.UpdateProfessionalDataController();
routes.post('/users', registerUserController.handle);
routes.put('/users', verifyAuthenticateToken_1.verifyAuthenticateToken, updateUserController.handle);
routes.post('/login', authenticateUserController.handle);
routes.get('/generaldata', verifyAuthenticateToken_1.verifyAuthenticateToken, readGeneralDataController.handle);
routes.post('/generaldata', verifyAuthenticateToken_1.verifyAuthenticateToken, createGeneralDataController.handle);
routes.put('/generaldata', verifyAuthenticateToken_1.verifyAuthenticateToken, updateGeneralDataController.handle);
routes.get('/addressdata', verifyAuthenticateToken_1.verifyAuthenticateToken, readAddressDataController.handle);
routes.put('/addressdata', verifyAuthenticateToken_1.verifyAuthenticateToken, updateAddressDataController.handle);
routes.get('/professionaldata', verifyAuthenticateToken_1.verifyAuthenticateToken, readProfessionalDataController.handle);
routes.put('/professionaldata', verifyAuthenticateToken_1.verifyAuthenticateToken, updateProfessionalDataController.handle);
