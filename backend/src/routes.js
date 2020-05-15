import { Router } from 'express';
import ClienteController from './app/controllers/ClientesController';

const routes = new Router();

routes.post('/cliente', ClienteController.store);
routes.get('/cliente', ClienteController.index);
routes.get('/cliente/:id', ClienteController.show);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.delete);

export default routes;
