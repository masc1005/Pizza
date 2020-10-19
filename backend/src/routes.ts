import { Router } from 'express'
import userController from './app/controllers/userController'

const routes = Router()

routes.post('/users', userController.Register)

export default routes