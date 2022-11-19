import { 
  ICreateHandler, 
  IReadAllHandler, 
  IReadOneHandler, 
  IUpdateHandler, 
  IDeleteHandler, 
} from './handlers/RequestHandler';

interface IController extends
  ICreateHandler,
  IReadAllHandler,
  IReadOneHandler,
  IUpdateHandler,
  IDeleteHandler {}
  
export default IController;