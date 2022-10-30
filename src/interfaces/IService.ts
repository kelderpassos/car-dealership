import { ICreate, IDelete, IReadAll, IReadOne, IUpdate } from './CrudMethods';

interface IService<T> extends 
  ICreate<T, T>,
  IReadAll<T>,
  IReadOne<T>,
  IUpdate<T, T>,
  IDelete<T> {}

export default IService;