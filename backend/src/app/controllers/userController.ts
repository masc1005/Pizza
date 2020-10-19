import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { v4 } from 'uuid'
import Users from '../models/Users'



class userController {
    async user(res: Response, req: Request) {
        const UserRepository = getRepository(Users)

        const { user , password } = req.body
        const id: string = v4()

        const userExist = await UserRepository.find({ where: { user } })

        if (userExist) {
            return res.sendStatus(409);
        }

        const savinUser = UserRepository.create({ id , user , password })
        await UserRepository.save(savinUser)

        return res.json(savinUser)
    }
}

export default new userController()