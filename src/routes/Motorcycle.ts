import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';

const route = Router();

const controller = new MotorcycleController();

route.post('/', (req, res) => controller.create(req, res));
route.get('/', (req, res) => controller.readAll(req, res));
route.get('/:id', (req, res) => controller.readOne(req, res));
route.put('/:id', (req, res) => controller.update(req, res));
route.delete('/:id', (req, res) => controller.delete(req, res));

export default route;
