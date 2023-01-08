import { Request, Response } from 'express'
import { ReadGeneralData } from './ReadGeneralData'


export class ReadGeneralDataController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;

    const generalData = new ReadGeneralData();
    const result = await generalData.execute({
        userId
    })

    return response.json(result)
  }
}
