import carsMongooseSchema from './Schemas';
import MongoModel from './Model';
import { ICar } from '../interfaces/ICar';

class CarsModel extends MongoModel<ICar> {
  constructor() {
    super('Cars', carsMongooseSchema);
  }
}

export default CarsModel;