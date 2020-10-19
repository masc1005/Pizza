import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { v4 } from 'uuid'
import Taste from '../models/Taste'
import Drink from '../models/Drink'

class ProductsController {

    // Register from new tastes
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

    //  Show all tastes
    async showTaste(req: Request, res: Response) {
        try {
            const TasteRepository = getRepository(Taste)
            const allTaste = await TasteRepository.find()

            return res.json({allTaste}).status(200)

        } catch (error) {
            console.log(error)
        }
    }

    // Register from new tastes
    async RegisterDrinks(req: Request, res: Response) {
        try {
            const TasteRepository = getRepository(Drink)

            const { code, name, price } = req.body
            const id_drink: string = v4()

            const TasteFound = await TasteRepository.findOne({ where: { name } })

            if (TasteFound) {
                return res.sendStatus(409);
            }

            const savinDrink = TasteRepository.create({ id_drink, code, name, price })

            await TasteRepository.save(savinDrink)

            return res.json(savinDrink)

        } catch (error) {
            console.log(error)
        }
    }

    // Show all drinks
    async showDrink(req: Request, res: Response) {
        try {
            const TasteRepository = getRepository(Drink)
            const allDrinks = await TasteRepository.find()

            return res.json({allDrinks})
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ProductsController()