import { Router } from 'express'
import { RegisterUserController } from './services/registerUser/RegisterUserController'

const routes = Router()

const registerUserController = new RegisterUserController()

routes.post('/users', registerUserController.handle)

export { routes }
