/* import chai from 'chai';


// import { expect } from 'chai';

import meal from '../../controllers/mealController';


const should = chai;


describe('Meal Controller: add meal function', () => {
  it('it should', (done) => {
    meal.addMeal((req, res) => {
      const { name } = req.body;
      res.body.message.should.be.equal(`name:${name} is added as a new meal`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
 */