// import express from 'express';
// import request from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';

// import { expect } from 'chai';
import app from '../src/app';


chai.use(chaiHttp);
const should = chai.should();

describe('Order Routes: Get all orders option', () => {
  it('it should GET all the Meals', (done) => {
    chai.request(app)
      .get('/api/v1/order')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Order Routes: Add an order option', () => {
  it('it should add an order', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        done();
      });
  });
});

