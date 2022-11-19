import carsMongooseSchema from './Schemas';
import MongoModel from './MongoModel';
import { ICar } from '../interfaces/ICar';

class CarsModel extends MongoModel<ICar> {
  constructor() {
    super('Cars', carsMongooseSchema);
  }
}

export default CarsModel;