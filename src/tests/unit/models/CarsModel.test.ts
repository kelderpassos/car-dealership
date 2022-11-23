import * as sinon from 'sinon';
import chai from 'chai';
import mongoose from 'mongoose';
import CarsModel from '../../../models/CarsModel';
import { allCarsMock, bodyMock, carMock } from '../../mocks/carsMock';

const { expect } = chai;

describe('Cars model', () => {
  const carsModel = new CarsModel();

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {    
    it('creates a new car successfully', async () => {
      sinon.stub(mongoose.Model, 'create').resolves(carMock);
      
      const newCar = await carsModel.create(bodyMock);
      
      expect(newCar).to.be.deep.equal(carMock);
    });
  });

  describe('read', () => {
    it('brings all cars from db', async () => {
      sinon.stub(mongoose.Model, 'find').resolves(allCarsMock);
      
      const allCars = await carsModel.readAll();
      
      expect(allCars).to.deep.equal(allCarsMock);
    });
  });

  describe('readOne', () => {
    it('brings an specific car from db', async () => {
      sinon.stub(mongoose.Model, 'findOne').resolves(carMock);
      
      const allCars = await carsModel.readOne('4edd40c86762e0fb12000003');
      
      expect(allCars).to.deep.equal(carMock);
    });

    it('throws an error if the id is invalid', async () => {  
      try {
        await carsModel.readOne('invalid-id');
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId');
      }
    });
  });

  describe('update', () => {
    it('updates a car present in the db', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(carMock);
      
      const updatedCar = await carsModel.update('4edd40c86762e0fb12000003', bodyMock);
      
      expect(updatedCar).to.deep.equal(carMock);
    });

    it('throws an error if the id is invalid', async () => {  
      try {
        await carsModel.update('invalid-id', bodyMock);
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId');
      }
    });

    it('throws an error if the car doesn\'t exist', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(false);
  
      try {
        await carsModel.update('4edd40c86762e0fb12000003', bodyMock);
      } catch (error: any) {
        expect(error.message).to.equal('ObjectNotFound');
      }
    });
  });

  describe('delete', () => {    
    it('deletes a car present in the db', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(carMock);
      
      const deletedCar = await carsModel.delete('4edd40c86762e0fb12000003');
      
      expect(deletedCar).to.deep.equal(carMock);
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(false);
  
      try {
        await carsModel.delete('invalid-id');
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId');
      }
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(false);
  
      try {
        await carsModel.delete('4edd40c86762e0fb12000003');
      } catch (error: any) {
        expect(error.message).to.equal('ObjectNotFound');
      }
    });
  });
});

