import chai from 'chai';
import chaiHttp from 'chai-http';

// import { expect } from 'chai';

import app from '../src/app';


chai.use(chaiHttp);
chai.should();

describe('Menu Routes: Add a menu option', () => {
  it('it should GET all the Menus', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Menu Routes: Add a menu option', () => {
  it('it should add a menu', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .send({
        id: 1, // meal in menu are given a new menu id
        name: 'rice and chicken',
        price: 1500,
        imageid: 'Qw12345'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('string');
        done();
      });
  });
});

