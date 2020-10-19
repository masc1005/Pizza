import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { v4 } from 'uuid'
import Users from '../models/Users'

class UserController {
	index(req: Request, res: Response){
		return res.send({ userID: req.userId })
	}

	async Register(req: Request, res: Response) {
		try {
			const UserRepository = getRepository(Users)

			const { user, password } = req.body
			const id: string = v4()

			const userExist = await UserRepository.findOne({ where: { user } })

			if (userExist) {
				return res.sendStatus(409);
			}

			const savinUser = UserRepository.create({ id, user, password })
			await UserRepository.save(savinUser)

			return res.json(savinUser)
		} catch (error) {
			console.log(error)
		}
	}
}

export default new UserController()