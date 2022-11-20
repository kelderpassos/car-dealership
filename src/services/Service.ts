import { ZodType } from 'zod';
import IService from '../interfaces/IService';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../utils/errorCatalog';

abstract class Service<T> implements IService<T> {
  constructor(protected _model: IModel<T>, private _zodSchema: ZodType<T>) {}

  private safeParse = (obj: unknown) => {
    const parsed = this._zodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return parsed.data;
  };

  public async create(obj: T): Promise<T | null> {
    const parsedData = this.safeParse(obj);

    return this._model.create(parsedData);
  }

  public async read(): Promise<T[]> {
    return this._model.read();
  }

  public async readOne(id: string): Promise<T | null> {
    const specificObject = await this._model.readOne(id);

    if (!specificObject) throw new Error(ErrorTypes.ObjectNotFound);

    return specificObject;
  }

  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    const parsedData = this.safeParse(obj);

    return this._model.update(id, parsedData);
  }
  
  public async delete(id: string): Promise<T | null> {
    return this._model.delete(id);
  }
}

export default Service;