import { Router } from 'express';
import ProcessadorController from '../controllers/ProcessadorController.js';
import errorRoutes from '../middlewares/errorRoutes.js';

const routes = new Router();

routes.get('/processors', ProcessadorController.index);

routes.use(errorRoutes);

export default routes;