import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsService from '../services/CarsService';
import CarsModel from '../models/CarsModel';

const route = Router();

const model = new CarsModel();
const service = new CarsService(model);
const controller = new CarsController(service);

route.post('/', (req, res) => controller.create(req, res));
route.get('/', (req, res) => controller.read(req, res));
route.get('/:id', (req, res) => controller.readOne(req, res));
route.put('/:id', (req, res) => controller.update(req, res));

export default route;
