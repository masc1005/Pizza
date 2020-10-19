import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getRepository } from 'typeorm'
import Users from '../models/Users'

class AuthController {
    async authenticate(req: Request, res: Response) {
        try {
            const UserRepository = getRepository(Users)
            const { user, password } = req.body
            const userSearch = await UserRepository.findOne({ where: { user } })

            if (!userSearch) {
                return res.sendStatus(401)
            }

            const isValidPassword = await bcrypt.compare(password, userSearch.password)

            if (!isValidPassword) {
                return res.sendStatus(401)
            }

            const token = jwt.sign( {id: userSearch.id}, 'secret', { expiresIn: '1d'})

            return res.json({
                user,
                token
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export default new AuthController()