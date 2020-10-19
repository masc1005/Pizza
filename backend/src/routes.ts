import { Router } from 'express'

import authMiddleware from './app/middlewares/authMiddleware'

import userController from './app/controllers/userController'
import AuthController from './app/controllers/AuthController'
import TasteController from './app/controllers/TasteController'

const routes = Router()

routes.post('/users', userController.Register)
routes.post('/auth', AuthController.authenticate)
routes.post('/newTaste',TasteController.RegisterTaste)
routes.get('/users', authMiddleware, userController.index)

export default routes