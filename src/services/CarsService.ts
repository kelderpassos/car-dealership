import CarsModel from '../models/CarsModel';
import Service from './Service';
import { ICar, CarZodSchema } from '../interfaces/ICar';

class CarsService extends Service<ICar> {
  constructor(model = new CarsModel()) {
    super(model, CarZodSchema);
  }
}

export default CarsService;