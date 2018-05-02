// import express from 'express';
// import request from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';

// import { expect } from 'chai';
import app from '../src/app';


chai.use(chaiHttp);
chai.should();


describe('Order Routes: Get all orders option', () => {
  it('it should GET all the Meals', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
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
      .post('/api/v1/orders')
      .send({
        id: 1,
        name: 'rice and chicken',
        price: 1500,
        imageid: 'Qw12345', // id to call saved image from file
        ordertime: new Date(),
        deliverystatus: 0
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        done();
      });
  });
});


describe('Order Routes: Update an order option', () => {
  it('it should update an order', (done) => {
    chai.request(app)
      .put('/api/v1/orders/1')
      .send({
        id: 1,
        name: 'rice and chicken',
        price: 1500,
        imageid: 'Qw12345', // id to call saved image from file
        ordertime: new Date(),
        deliverystatus: 0
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('Order Routes: delete an order option', () => {
  it('it should delete an order', (done) => {
    chai.request(app)
      .delete('/api/v1/orders/1')
      .send({
        id: 1,
        name: 'rice and chicken',
        price: 1500,
        imageid: 'Qw12345', // id to call saved image from file
        ordertime: new Date(),
        deliverystatus: 0
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('Test for failure to delete orders', () => {
  it('it should test for failure to delete orders', (done) => {
    chai.request(app)
      .delete('/api/v1/orders/1')
      .send({
        id: 1,
        name: 'rice and chicken',
        price: 1500,
        imageid: 'Qw12345', // id to call saved image from file
        ordertime: new Date(),
        deliverystatus: 0
      })
      .end((err, res) => {
        if (res.status !== 200) {
          res.status.have.status(404);
        }
        done();
      });
  });
});

