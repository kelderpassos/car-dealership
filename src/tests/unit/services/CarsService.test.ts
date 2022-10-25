import * as sinon from 'sinon';
import chai from 'chai';
import mongoose from 'mongoose';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import { allCarsMock, bodyMock, carMock } from '../../mocks/carsMock';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../utils/errorCatalog';

const { expect } = chai;

describe('Cars service', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel)

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {    
    it('creates a new car successfully', async () => {
      sinon.stub(carsModel, 'create').resolves(carMock);
      
      const newCar = await carsService.create(bodyMock);
      
      expect(newCar).to.deep.equal(carMock);
    });

    it('throws an error if a new car isn\'t created', async () => {

      try {
        await carsService.create({});
      } catch (error: any) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('read', () => {
    it('brings all cars from db', async () => {
      sinon.stub(carsModel, 'read').resolves(allCarsMock);
      
      const allCars = await carsService.read();

      expect(allCars).to.be.deep.equal(allCarsMock);
    });

  });

  describe('readOne', () => {
    it('brings an specific car from db', async () => {
      sinon.stub(carsModel, 'readOne').resolves(carMock);
      
      const specificCar = await carsService.readOne('4edd40c86762e0fb12000003');
      
      expect(specificCar).to.deep.equal(carMock);
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(carsModel, 'readOne').resolves(null)

      let error;

      try {
        await carsService.readOne('invalid-id');
      } catch (err: any) {        
        error = err
      }

      expect(error?.message).to.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });

  describe('update', () => {
    it('updates a car present in the db', async () => {
      sinon.stub(carsModel, 'update').resolves(carMock);
      
      const updatedCar = await carsService.update('4edd40c86762e0fb12000003', bodyMock);
      
      expect(updatedCar).to.deep.equal(carMock);
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(carsModel, 'update').resolves(null);
      
      let error;
  
      try {
        await carsService.update('4edd40c86762e0fb12000003', '');
      } catch (err: any) {
        error = err;
      }
      expect(error).to.be.an.instanceOf(ZodError);
    });

  });

  describe('delete', () => {    
    it('deletes a car present in the db', async () => {
      sinon.stub(carsModel, 'delete').resolves(carMock);
      
      const deletedCar = await carsService.delete('4edd40c86762e0fb12000003');
      
      expect(deletedCar).to.deep.equal(carMock);
    });
  });
});