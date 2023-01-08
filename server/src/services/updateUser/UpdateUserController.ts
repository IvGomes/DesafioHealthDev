import { Request, Response } from 'express'
import { UpdateUser } from './UpdateUser'


export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;
    const requestBody = request.body;

    const userData = new UpdateUser();
    const result = await userData.execute({
        userId,
        requestBody
    })

    return response.json(result)
  }
}