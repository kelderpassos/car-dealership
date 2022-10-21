import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsService from '../services/CarsService';
import CarsModel from '../models/CarsModel';

const route = Router();

const model = new CarsModel();
const service = new CarsService(model);
const controller = new CarsController(service);

route.post('/', (req, res) => controller.create(req, res));

export default route;
