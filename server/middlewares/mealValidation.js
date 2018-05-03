import validator from 'validator';
import meal from '../model/meal';

const alphanumericq = new RegExp('/^[A-z]+$/');

const numbersOnly = new RegExp('^[0-9]+$');

/*
 * Class representing validator
 *
 * @class MealValidation
 */
class MealValidation {
  /**
   * Check for all required input fields
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next route handler
   * @returns {object} JSON object representing failure message
   * 
   */
  static AuthenticateMealInput(req, res, next){
    const {
      name, price
    } = req.body;
    const pricestring = price.toString() ;
    if (name === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for meal'
        });
    } 
    if (price === undefined) {   
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for price'
        });
    }
    if (price !== parseInt(price, 10)) {   
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'Input is not a number'
        });
    }
    if (validator.isEmpty(name)) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'name name cannot be empty'
        });
    }
  
   


    if (!(validator.isLength(name, { min: 3, max: 20 }))) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'name should be 3 to 30 characters'
        });
    }

    

    if (validator.contains(name, '  ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Invalid name. Please use single whitespace'
        });
    }

    if (name !== validator.trim(name, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'name cannot end/begin with whitespace'
        });
    }
    return next();
  }
}


export default MealValidation;

