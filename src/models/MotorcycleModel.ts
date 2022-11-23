import { motorcycleMongooseSchema } from './Schemas';
import MongoModel from './Model';
import { IMotorcycle } from '../interfaces/entities/IMotorcycle';

class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor() {
    super('Motorcycles', motorcycleMongooseSchema);
  }
}

export default MotorcycleModel;
