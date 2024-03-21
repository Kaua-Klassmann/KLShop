import { Router } from 'express';
import ProcessadorController from '../controllers/ProcessadorController.js';
import GraphicCardController from '../controllers/GraphicCardController.js';
import errorRoutes from '../middlewares/errorRoutes.js';

const routes = new Router();

// PROCESSOR ROUTES
routes.get('/processors', ProcessadorController.index);
routes.get('/processor/:id', ProcessadorController.show);

// GRAPHICCARD ROUTES
routes.get('/graphicCards', GraphicCardController.index);
routes.get('/graphicCard/:id', GraphicCardController.show);

routes.use(errorRoutes);

export default routes;