import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errors';
import route from './routes/CarsRoute';

const app = express();
app.use(express.json());
app.use('/cars', route);
app.use(errorHandler);

export default app;
