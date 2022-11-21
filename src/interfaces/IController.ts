import { 
  ICreate, 
  IReadAll, 
  IReadOne, 
  IUpdate, 
  IDelete, 
} from './handlers/RequestHandler';

interface IController extends
  ICreate,
  IReadAll,
  IReadOne,
  IUpdate,
  IDelete {}
  
export default IController;