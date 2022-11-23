import * as sinon from 'sinon';
import chai from 'chai';
import mongoose from 'mongoose';
import MotorcycleModel from '../../../models/MotorcycleModel';
import { bodyMock, motorcycleMock, allMotorcyclesMock } from '../../mocks/motorcyclesMock';

const { expect } = chai;

describe('Motorcycle model', () => {
  const motorcycleModel = new MotorcycleModel();

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {
    it('should create a new motorcycle successfully', async () => {
      sinon.stub(mongoose.Model, 'create').resolves(motorcycleMock);

      const newMotorcycle = await motorcycleModel.create(bodyMock);

      expect(newMotorcycle).to.be.deep.equal(motorcycleMock);
    });
  });

  describe('read', () => {
    it('brings all motorcycles from db', async () => {
      sinon.stub(mongoose.Model, 'find').resolves(allMotorcyclesMock);

      const allMotorcycles = await motorcycleModel.readAll();

      expect(allMotorcycles).to.be.deep.equal(allMotorcyclesMock);
    });
  });

  describe('readOne', () => {
    it('brings an specific motorcycle from db', async () => {
      sinon.stub(mongoose.Model, 'findOne').resolves(motorcycleMock);

      const specificMotorcycle = await motorcycleModel.readOne('637e20157100e53b69483be2');

      expect(specificMotorcycle).to.be.deep.equal(motorcycleMock);
    });

    it('throws an error if the id is invalid', async () => {  
      try {
        await motorcycleModel.readOne('invalid-id');
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId');
      }
    });
  });

  describe('update', () => {
    it('updates a motorcycle present in the db', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(motorcycleMock);

      const updatedMotorcycle = 
        await motorcycleModel.update('637e20157100e53b69483be2', bodyMock);

      expect(updatedMotorcycle).to.equal(motorcycleMock);
    });

    it('throws an error if the id is invalid', async () => {  
      try {
        await motorcycleModel.update('invalid-id', bodyMock)
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId')
      }
    });

    it('throws an error if the motorcycle doesn\'t exist', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(false);

      try {
        await motorcycleModel.update('4edd40c86762e0fb12000003', bodyMock);
      } catch (error: any) {
        expect(error.message).to.equal('ObjectNotFound');
      }
    });
  });

  describe('delete', () => {    
    it('deletes a motorcycle present in the db', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(motorcycleMock);
      
      const deletedMotorcycle = await motorcycleModel.delete('4edd40c86762e0fb12000003');
      
      expect(deletedMotorcycle).to.deep.equal(motorcycleMock);
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(false);
  
      try {
        await motorcycleModel.delete('invalid-id');
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId');
      }
    });

    it('throws an error if the id is invalid', async () => {
      sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(false);
  
      try {
        await motorcycleModel.delete('4edd40c86762e0fb12000003');
      } catch (error: any) {
        expect(error.message).to.equal('ObjectNotFound');
      }
    });
  });
});
