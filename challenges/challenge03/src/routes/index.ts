import { Router } from 'express';
import sessionRouter from './session.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);

export default routes;