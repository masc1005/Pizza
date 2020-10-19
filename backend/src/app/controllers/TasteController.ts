import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { v4 } from 'uuid'
import Taste from '../models/Taste'

class TasteController {

    async RegisterTaste(req: Request, res: Response) {
        try {
            const TasteRepository = getRepository(Taste)

            const { code, name, price, description } = req.body
            const id_taste: string = v4()

            const TasteFound = await TasteRepository.findOne({ where: { name } })

            if (TasteFound) {
                return res.sendStatus(409);
            }

            const savinTaste = TasteRepository.create({ id_taste, code, name, price, description })

            await TasteRepository.save(savinTaste)

            return res.json(savinTaste)

        } catch (error) {
            console.log(error)
        }
    }
}

export default new TasteController()