import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import createError from 'http-errors'
import { v4 } from 'uuid'
import Taste from '../models/Taste'
import Drink from '../models/Drink'
import Soliciation from '../models/Soliciation'

class ProductsController {

    // Register from new tastes
    async RegisterTaste(req: Request, res: Response) {
        try {
            const TasteRepository = getRepository(Taste)

            const { code, name, price, description } = req.body
            const id_taste: string = v4()

            const TasteFound = await TasteRepository.findOne({ where: { name } })

            if (TasteFound) {
                const error = createError(409, 'This taste already exist');
                throw error;
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

            return res.json({ allTaste }).status(200)

        } catch (error) {
            console.log(error)
        }
    }

    // Register from new Drinks
    async RegisterDrinks(req: Request, res: Response) {
        try {
            const DrinkRepository = getRepository(Drink)

            const { code, name, price } = req.body
            const id_drink: string = v4()

            const DrinkFound = await DrinkRepository.findOne({ where: { name } })

            if (DrinkFound) {
                const error = createError(409, 'This taste already exist');
                throw error;
            }

            const savinDrink = DrinkRepository.create({ id_drink, code, name, price })

            await DrinkRepository.save(savinDrink)

            return res.json(savinDrink).status(200)

        } catch (error) {
            console.log(error)
        }
    }

    // Show all drinks
    async showDrink(req: Request, res: Response) {
        try {
            const DrinkRepository = getRepository(Drink)
            const allDrinks = await DrinkRepository.find()

            return res.json({ allDrinks }).status(200)
        } catch (error) {
            console.log(error)
        }
    }

    // -------------------------------------------------------- //


    async createSoliciation(req: Request, res: Response) {
        try {
            const SoliciationRepository = getRepository(Soliciation)
            const TasteRepository = getRepository(Taste)
            const DrinkRepository = getRepository(Drink)

            const { table, fk_taste, fk_drink } = req.body
            const id_solicitation: string = v4()

            const solictedDrink = await DrinkRepository.find({
                where: {
                    code: fk_drink
                }
            })
            if (!solictedDrink) {
                const error = createError(404, 'Taste not found');
                throw error;
            }

            const solictedTaste = await TasteRepository.find({
                where: {
                    code: fk_taste
                }
            })
            if (!solictedTaste) {
                const error = createError(404, 'Taste not found');
                throw error;
            }    

            const allSoliciations = await SoliciationRepository.find({ where: { table } })

            if (allSoliciations) {
                const error = createError(409, 'Thats not your table');
                throw error;
            }

            const savinSolicitations = SoliciationRepository.create({
                id_solicitation, table, fk_drink, fk_taste
            })

            await SoliciationRepository.save(savinSolicitations)

            if ( savinSolicitations ) {
                res.json(savinSolicitations).status(200)
            }

        } catch (error) {
            console.log(error)
        }
    }

    // show all Soliciations
    async showSolicitations(req: Request, res: Response) {
        try {
            const SoliciationRepository = getRepository(Soliciation)

            const allSoliciations = await SoliciationRepository.find()

            return res.json({ allSoliciations }).status(200)

        } catch (error) {
            console.log(error)
        }
    }
}

export default new ProductsController()