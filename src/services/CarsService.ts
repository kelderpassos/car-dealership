import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import { ICar, CarZodSchema } from '../interfaces/ICar';

class CarsService implements IService<ICar> {
  private _carsModel: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._carsModel = model;
  }

  async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._carsModel.create(parsed.data);
  }

  async read(): Promise<ICar[]> {
    return this._carsModel.read();
  }

  async readOne(_id: string): Promise<ICar | null> {
    const specificCar = await this._carsModel.readOne(_id);

    if (!specificCar) throw new Error('Entity not found');

    return specificCar;
  }

  async delete(_id: string): Promise<ICar | null> {
    const deletedCar = await this._carsModel.delete(_id);

    if (!deletedCar) throw new Error('Entity not found');

    return deletedCar;
  }

  async update(_id: string, obj: unknown): Promise<ICar | null> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._carsModel.update(_id, parsed.data);
  }
}

export default CarsService;