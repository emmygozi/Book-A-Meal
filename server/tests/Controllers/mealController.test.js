import chai from 'chai';


// import { expect } from 'chai';

import meal from '../../controllers/mealController';


const should = chai;


describe('Meal Controller: add meal function', () => {
  it('it should', (done) => {
    const mealarr = {
      id: 1,
      name: 'rice and chicken',
      price: 1500,
      imageid: 'df8273'
    };
    meal.addMeal((req, res) => {
      // const { name } = req.body;
      req = mealarr;
      /* res.body.message.should.be.equal(`name:${name} is added as a new meal`);
      */
      res.should.have.status(201);
      res.body.should.be.a('object');
    });
    done();
  });
});
