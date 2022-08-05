import express from 'express';
import routes from './routes';

import './database'

import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

export default app;
