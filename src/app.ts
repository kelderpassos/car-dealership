import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errors';
import carsRoute from './routes/CarsRoute';
import motorcycleRoute from './routes/Motorcycle';

const app = express();
app.use(express.json());
app.use('/cars', carsRoute);
app.use('/motorcycles', motorcycleRoute);
app.use(errorHandler);

export default app;
