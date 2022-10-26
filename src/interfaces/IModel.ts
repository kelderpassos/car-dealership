import { ICreate, IDelete, IReadAll, IReadOne, IUpdate } from './CrudMethods';

interface IModel<T> extends 
  ICreate<T, T>, 
  IReadAll<T>,
  IReadOne<T>, 
  IUpdate<T, T>, 
  IDelete<T> {}

export default IModel;