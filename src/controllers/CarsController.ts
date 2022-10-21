import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarsController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._service = service;
  }

  async create(req: Request, res: Response<ICar>) {
    const { 
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    } = req.body;

    const carInfos = { model, year, color, status, buyValue, doorsQty, seatsQty };

    const newCar = await this._service.create(carInfos);
    
    return res.status(200).json(newCar);
  }

  async read(req: Request, res: Response<ICar[]>) {
    const allCars = await this._service.read();
    
    return res.status(200).json(allCars);
  }

  // async readOne(req: Request, res: Response<ICar>) {
  //   const { id } = req.params;

  //   const specificCar = await this._service.readOne(id);
    
  //   return res.status(200).json(specificCar);
  // }

  // async delete(_id: string): Promise<ICar | null> {
  //   const deletedCar = await this._carsModel.delete(_id);

  //   if (!deletedCar) throw new Error('Entity not found');

  //   return deletedCar;
  // }

  // async update(_id: string, obj: unknown): Promise<ICar | null> {
  //   const parsed = CarZodSchema.safeParse(obj);

  //   if (!parsed.success) throw parsed.error;

  //   return this._carsModel.update(_id, parsed.data);
  // }
}

export default CarsController;