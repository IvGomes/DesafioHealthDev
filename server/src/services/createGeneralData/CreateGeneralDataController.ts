import { Request, Response } from 'express'
import { CreateGeneralData } from './CreateGeneralData'


export class CreateGeneralDataController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;
    const requestBody = request.body;

    const generalData = new CreateGeneralData();
    const result = await generalData.execute({
        userId,
        requestBody
    })

    return response.json(result)
  }
}
