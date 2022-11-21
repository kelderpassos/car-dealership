import { ICreate, IReadAll, IReadOne, IUpdate, IDelete } from '../handlers/CrudMethods';

interface IService<T> extends 
  ICreate<T, T>,
  IReadAll<T>,
  IReadOne<T>,
  IUpdate<T, T>,
  IDelete<T> {}

export default IService;