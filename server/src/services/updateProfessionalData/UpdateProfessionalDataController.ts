import { Request, Response } from 'express'
import { UpdateProfessionalData } from './UpdateProfessionalData'


export class UpdateProfessionalDataController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;
    const requestBody = request.body;

    const professionalData = new UpdateProfessionalData();
    const result = await professionalData.execute({
        userId,
        requestBody
    })

    return response.json(result)
  }
}
