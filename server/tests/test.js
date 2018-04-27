// During the test the env variable is set to test
// Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';


import Meals from '../controllers/mealController';
import router from '../routes/index';

process.env.NODE_ENV = 'test';

let auth1;
let name1;
const { expect, assert, should } = chai;
chai.use(chaiHttp);


describe('TEST for businesses', () => {
  before((done) => {
    Meals.sync({ force: true })
      .then(() => done());
  });

  describe('POST business:When user sends a POST request to /api/v1/businesses/', () => {
    before((done) => {
      chai.request(router)
        .post('/api/v1/meal')
        .type('form')
        .send({
          name: 'rice and chicken',
          price: 1000,
          imageid: 'hh7s77s'
        })
        .end((err, res) => {
          auth1 = res.json(`${name1} is added as a new meal`);
          done();
        });
    });
    it('should return a status 400 for any undefined field', (done) => {
      chai.request(router)
        .post('/api/v1/meal')
        .type('form')
        .send({
          name: 'rice and chicken',
          price: 1000,
          imageid: 'hh7s77s'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body).to.be.a('object');
          assert.equal(
            res.body.message,
            'All or some of the field is/are undefined'
          );
          done();
        });
    });
  });
});

