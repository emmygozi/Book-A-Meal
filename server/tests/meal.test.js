// import express from 'express';
// import request from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';

// import { expect } from 'chai';

import app from '../src/app';


chai.use(chaiHttp);
const should = chai.should();


describe('Meal Routes: Get meals option', () => {
  it('it should GET all the Meals', (done) => {
    chai.request(app)
      .get('/api/v1/meal')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Meal Routes: Add a meal option', () => {
  it('it should add a meal', (done) => {
    chai.request(app)
      .post('/api/v1/meal')
      .send({
        id: 1,
        name: 'rice and chicken',
        price: 1500,
        imageid: 'df8273',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        done();
      });
  });
});

