import { Request, Response } from 'express'
import { UpdateAddressData } from './UpdateAddressData'


export class UpdateAddressDataController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;
    const requestBody = request.body;

    const addressData = new UpdateAddressData();
    const result = await addressData.execute({
        userId,
        requestBody
    })

    return response.json(result)
  }
}
