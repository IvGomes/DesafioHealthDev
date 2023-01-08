import { Request, Response } from 'express'
import { ReadAddressData } from './ReadAddressData'


export class ReadAddressDataController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;

    const addressData = new ReadAddressData();
    const result = await addressData.execute({
        userId
    })

    return response.json(result)
  }
}
