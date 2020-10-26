import { Router } from 'express'

//import authMiddleware from './app/middlewares/authMiddleware'

import userController from './app/controllers/userController'
import AuthController from './app/controllers/AuthController'


import productsController from './app/controllers/productsController'

const routes = Router()

routes.post('/auth', AuthController.authenticate)

//routes.get('/users', authMiddleware, userController.Index)

routes.get('/Tastes', productsController.showTaste)
routes.get('/Drinks', productsController.showDrink)
routes.get('/Solicitations', productsController.showSolicitations)

routes.post('/users', userController.Register)
routes.post('/newTaste', productsController.RegisterTaste)
routes.post('/newDrink', productsController.RegisterDrinks)
routes.post('/newSolicitation', productsController.createSoliciation)



export default routes