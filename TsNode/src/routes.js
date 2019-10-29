import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router()

routes.post('/user', UserController.create)
routes.get('/users', UserController.read)
routes.get('/user/:id', UserController.read)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.delete)

export default routes
