import { model, isValidObjectId, Schema } from 'mongoose';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../utils/errorCatalog';

abstract class MongoModel<T> implements IModel<T> {
  protected _model;

  constructor(alias: string, schema: Schema) {
    this._model = model(alias, schema);
  }

  private checkId = (id: string) => {
    if (!isValidObjectId(id)) throw new Error(ErrorTypes.InvalidMongoId);
  };

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readAll(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id: string): Promise<T | null> {
    this.checkId(_id);

    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    this.checkId(_id);

    const updatedCar = await this._model.findByIdAndUpdate(_id, obj);

    if (!updatedCar) throw new Error(ErrorTypes.ObjectNotFound);
    
    return updatedCar;
  }

  public async delete(_id: string): Promise<T | null> {
    this.checkId(_id);

    const deletedCar = await this._model.findByIdAndDelete(_id);
    
    if (!deletedCar) throw new Error(ErrorTypes.ObjectNotFound);

    return deletedCar;
  }
}

export default MongoModel;