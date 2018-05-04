import validator from 'validator';
import order from '../model/order';



const regex = /^([\s\.]?[a-zA-Z]+)+$/; 

/*
 * Class representing validator
 *
 * @class MealValidation
 */
class OrdersValidation {
  /**
   * Check for all required input fields
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next route handler
   * @returns {object} JSON object representing failure message
   * 
   */
  static AuthenticateOrderInput(req, res, next){
    const {
      name, price, deliveryaddress
    } = req.body;
    if (name === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for meal'
        });
    } 
    if (deliveryaddress === undefined) {
        return res.status(400)
          .json({
            status: 'Fail',
            message: 'No input was received for delivery address'
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
          message: 'name cannot be empty'
        });
    }
    
    if (validator.isEmpty(deliveryaddress)) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'Delivery address cannot be empty'
        });
    }
  
   


    if (!(validator.isLength(name, { min: 3, max: 20 }))) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'name should be 3 to 30 characters'
        });
    }

    if (!(validator.isLength(deliveryaddress, { min: 5, max: 100 }))) {
        return res.status(406)
          .json({
            status: 'Fail',
            message: 'Your address input is not valid'
          });
      }

      if (!(validator.isAlpha(name))) {
        return res.status(406)
          .json({
            status: 'Fail',
            message: 'Your name input is not valid'
          });
      }
  
    

    if (validator.contains(name, '  ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Invalid name. Please use single whitespace'
        });
    }

    if (validator.contains(deliveryaddress, '  ')) {
        return res.status(406)
          .json({
            status: 'Fail',
            message: 'Invalid delivery address. Please use single whitespace'
          });
      }

    if (name !== validator.trim(name, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'name cannot end/begin with whitespace'
        });
    }
    if (deliveryaddress !== validator.trim(deliveryaddress, ' ')) {
        return res.status(406)
          .json({
            status: 'Fail',
            message: 'name cannot end/begin with whitespace'
          });
      }
    return next();
  }
}


export default OrdersValidation;

