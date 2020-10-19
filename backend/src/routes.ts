import { Router } from 'express'

// import authMiddleware from './app/middlewares/authMiddleware'

import userController from './app/controllers/userController'
import AuthController from './app/controllers/AuthController'


import productsController from './app/controllers/productsController'

const routes = Router()

routes.post('/auth', AuthController.authenticate)

routes.post('/users', userController.Register)
routes.post('/newTaste', productsController.RegisterTaste)
routes.post('/newDrink', productsController.RegisterDrinks)

routes.get('/allTaste', productsController.showTaste)
routes.get('/allDrink', productsController.showDrink)


// routes.get('/users', authMiddleware, [...]

export default routes