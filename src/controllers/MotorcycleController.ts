import MotorcycleService from '../services/MotorcycleService';
import Controller from './Controller';
import { IMotorcycle } from '../interfaces/entities/IMotorcycle';

class MotorcycleController extends Controller<IMotorcycle> {
  constructor(service = new MotorcycleService()) {
    super(service);
  }
}

export default MotorcycleController;
