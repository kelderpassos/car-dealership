import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleController from '../../../controllers/MotorcycleController';
import { bodyMock, allMotorcyclesMock, motorcycleMock } from '../../mocks/motorcyclesMock';

const { expect } = chai;

describe('Cars service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel)
  const motorcycleController = new MotorcycleController(motorcycleService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {    
    it('creates a new motorcycle successfully', async () => {
      sinon.stub(motorcycleService, 'create').resolves(motorcycleMock);

      req.body = bodyMock;
      
      await motorcycleController.create(req, res);
      
      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('read', () => {
    it('brings all motorcycles from db', async () => {
      sinon.stub(motorcycleService, 'readAll').resolves(allMotorcyclesMock);
      
      await motorcycleController.readAll(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(allMotorcyclesMock)).to.be.true;
    });

  });

  describe('readOne', () => {
    it('brings an specific motorcycle from db', async () => {
      sinon.stub(motorcycleService, 'readOne').resolves(motorcycleMock);
      req.params = { id: '4edd40c86762e0fb12000003' }
      
      await motorcycleController.readOne(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('update', () => {
    it('updates a motorcycle present in the db', async () => {
      sinon.stub(motorcycleService, 'update').resolves(motorcycleMock);

      req.params = { id: '4edd40c86762e0fb12000003' };
      req.body = bodyMock;
      
      await motorcycleController.update(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(motorcycleMock)).to.be.true;
    });

    it('throws an error if the body is empty', async () => {
      req.body = [];

      let error;

      try {
        await motorcycleController.update(req, res);        
      } catch (err: any) {
        error = err;
      }

      expect(error?.message).to.be.equal('InvalidRequestBody');
    });

  });

  describe('delete', () => {    
    it('deletes a motorcycle present in the db', async () => {
      sinon.stub(motorcycleService, 'delete').resolves();
      res.end = sinon.stub().returns(res);

      req.params = { id: '4edd40c86762e0fb12000003' }
      
      await motorcycleController.delete(req, res);

      const resStub = res.status as sinon.SinonStub;
      const endStub = res.end as sinon.SinonStub;

      
      expect(resStub.calledWith(204)).to.be.true;
      expect(endStub.calledWith()).to.be.true;
    });
  });
});

