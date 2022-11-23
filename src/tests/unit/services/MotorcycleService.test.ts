import * as sinon from 'sinon';
import chai from 'chai';
import { allMotorcyclesMock, bodyMock, motorcycleMock } from '../../mocks/motorcyclesMock';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../utils/errorCatalog';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';

const { expect } = chai;

describe('Cars service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel)

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {    
    it('creates a new motorcycle successfully', async () => {
      sinon.stub(motorcycleModel, 'create').resolves(motorcycleMock);
      
      const newCar = await motorcycleService.create(bodyMock);
      
      expect(newCar).to.deep.equal(motorcycleMock);
    });

    it('throws an error if a new motorcycle isn\'t created', async () => {

      try {
        await motorcycleService.create({
          model: '',
          year: 0,
          color: '',
          buyValue: 0,
          category: 'Street',
          engineCapacity: 0
        });
      } catch (error: any) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('read', () => {
    it('brings all motorcycles from db', async () => {
      sinon.stub(motorcycleModel, 'readAll').resolves(allMotorcyclesMock);
      
      const allCars = await motorcycleService.readAll();

      expect(allCars).to.be.deep.equal(allMotorcyclesMock);
    });

  });

  describe('readOne', () => {
    it('brings an specific motorcycle from db', async () => {
      sinon.stub(motorcycleModel, 'readOne').resolves(motorcycleMock);
      
      const specificCar = await motorcycleService.readOne('4edd40c86762e0fb12000003');
      
      expect(specificCar).to.deep.equal(motorcycleMock);
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(motorcycleModel, 'readOne').resolves(null)

      let error;

      try {
        await motorcycleService.readOne('invalid-id');
      } catch (err: any) {        
        error = err
      }

      expect(error?.message).to.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });

  describe('update', () => {
    it('updates a motorcycle present in the db', async () => {
      sinon.stub(motorcycleModel, 'update').resolves(motorcycleMock);
      
      const updatedCar = await motorcycleService.update('4edd40c86762e0fb12000003', bodyMock);
      
      expect(updatedCar).to.deep.equal(motorcycleMock);
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(motorcycleModel, 'update').resolves(null);
      
      let error;
  
      try {
        await motorcycleService.update('4edd40c86762e0fb12000003', {});
      } catch (err: any) {
        error = err;
      }
      expect(error).to.be.an.instanceOf(ZodError);
    });

  });

  describe('delete', () => {    
    it('deletes a motorcycle present in the db', async () => {
      sinon.stub(motorcycleModel, 'delete').resolves(motorcycleMock);
      
      const deletedCar = await motorcycleService.delete('4edd40c86762e0fb12000003');
      
      expect(deletedCar).to.deep.equal(motorcycleMock);
    });
  });
});