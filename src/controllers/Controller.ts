import { Response, Request } from 'express';
import IController from '../interfaces/IController';
import IService from '../interfaces/IService';
import { ErrorTypes } from '../utils/errorCatalog';

abstract class Controller<T> implements IController {
  constructor(protected _service: IService<T>) {}

  async create(req: Request, res: Response): Promise<Response | null> {
    const { body } = req;

    const newObj = await this._service.create(body);

    return res.status(201).json(newObj);
  }

  async readAll(req: Request, res: Response): Promise<Response | null> {
    const allObj = await this._service.readAll();

    return res.status(200).json(allObj);
  }

  async readOne(req: Request, res: Response): Promise<Response | null> {
    const { id } = req.params;

    const specificObject = await this._service.readOne(id);

    return res.status(200).json(specificObject);
  }

  async update(req: Request, res: Response): Promise<Response | null> {
    const { id } = req.params;
    const { body } = req;

    if (Object.keys(req.body).length === 0) throw new Error(ErrorTypes.InvalidRequestBody);

    const updatedObj = await this._service.update(id, body);

    return res.status(200).json(updatedObj);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this._service.delete(id);

    return res.status(204).end();
  }
}

export default Controller;