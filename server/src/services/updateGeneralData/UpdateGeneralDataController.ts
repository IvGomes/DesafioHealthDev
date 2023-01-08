import { Request, Response } from 'express'
import { UpdateGeneralData } from './UpdateGeneralData'


export class UpdateGeneralDataController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;
    const requestBody = request.body;

    const generalData = new UpdateGeneralData();
    const result = await generalData.execute({
        userId,
        requestBody
    })

    return response.json(result)
  }
}
