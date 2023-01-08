import { Request, Response } from 'express'
import { ReadProfessionalData } from './ReadProfessionalData'


export class ReadProfessionalDataController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;

    const professionalData = new ReadProfessionalData();
    const result = await professionalData.execute({
        userId
    })

    return response.json(result)
  }
}
