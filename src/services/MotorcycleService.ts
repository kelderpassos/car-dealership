import { IMotorcycle, MotorcycleSchema } from '../interfaces/entities/IMotorcycle';
import MotorcycleModel from '../models/MotorcycleModel';
import Service from './Service';

class MotorcycleService extends Service<IMotorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model, MotorcycleSchema);
  }
}

export default MotorcycleService;