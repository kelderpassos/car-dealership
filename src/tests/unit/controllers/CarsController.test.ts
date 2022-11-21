import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import CarsController from '../../../controllers/CarsController';
import { allCarsMock, bodyMock, carMock } from '../../mocks/carsMock';
import { ErrorTypes } from '../../../utils/errorCatalog';

const { expect } = chai;

describe('Cars service', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel)
  const carsController = new CarsController(carsService);

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
    it('creates a new car successfully', async () => {
      sinon.stub(carsService, 'create').resolves(carMock);

      req.body = bodyMock;
      
      await carsController.create(req, res);
      
      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  });

  describe('read', () => {
    it('brings all cars from db', async () => {
      sinon.stub(carsService, 'readAll').resolves(allCarsMock);
      
      await carsController.readAll(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;

      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(allCarsMock)).to.be.true;
    });

  });

  describe('readOne', () => {
    it('brings an specific car from db', async () => {
      sinon.stub(carsService, 'readOne').resolves(carMock);
      req.params = { id: '4edd40c86762e0fb12000003' }
      
      await carsController.readOne(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  });

  describe('update', () => {
    it('updates a car present in the db', async () => {
      sinon.stub(carsService, 'update').resolves(carMock);

      req.params = { id: '4edd40c86762e0fb12000003' };
      req.body = bodyMock;
      
      await carsController.update(req, res);

      const resStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(resStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });

    it('throws an error if the body is empty', async () => {
      req.body = [];

      let error;

      try {
        await carsController.update(req, res);        
      } catch (err: any) {
        error = err;
      }

      expect(error?.message).to.be.equal('InvalidRequestBody');
    });

  });

  describe('delete', () => {    
    it('deletes a car present in the db', async () => {
      sinon.stub(carsService, 'delete').resolves();
      res.end = sinon.stub().returns(res);

      req.params = { id: '4edd40c86762e0fb12000003' }
      
      await carsController.delete(req, res);

      const resStub = res.status as sinon.SinonStub;
      const endStub = res.end as sinon.SinonStub;

      
      expect(resStub.calledWith(204)).to.be.true;
      expect(endStub.calledWith()).to.be.true;
    });
  });
});