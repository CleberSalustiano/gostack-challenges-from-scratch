import { Router } from 'express';
import sumAllRequests from '../middlewares/sumAllRequests';
import projectsRouter from './projects.routes';

const routes = Router();

routes.use('/projects', sumAllRequests,projectsRouter);

export default routes;