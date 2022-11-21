import { Router } from 'express';
import CarsController from '../controllers/CarsController';

const route = Router();

const controller = new CarsController();

route.post('/', (req, res) => controller.create(req, res));
route.get('/', (req, res) => controller.readAll(req, res));
route.get('/:id', (req, res) => controller.readOne(req, res));
route.put('/:id', (req, res) => controller.update(req, res));
route.delete('/:id', (req, res) => controller.delete(req, res));

export default route;
