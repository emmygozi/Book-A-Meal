import validator from 'validator';
import meal from '../model/meal';


/*
 * Class representing validator
 *
 * @class UserValidation
 */
class UserValidation {
  /**
   * Check for all required input fields
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next route handler
   * @returns {object} JSON object representing failure message
   * 
   */
  static AuthenticateUserInput(req, res, next){
    const {
      name, email, password
    } = req.body;
    if (email === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for email'
        });
    }
    
    if (password === undefined) {   
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for password'
        });
    }

    if (!(validator.isAlpha(name))) {
        return res.status(406)
          .json({
            status: 'Fail',
            message: 'Your name input is not valid'
          });
      } 

    if (name === undefined) {   
        return res.status(400)
          .json({
            status: 'Fail',
            message: 'No input was received for name' 
          });
      }

      if (!(validator.isEmail(email))) {
        return res.status(400)
          .json({
            status: 'Fail',
            message: 'not an email'
          });
      }
      
    
    if (validator.isEmpty(email)) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'email name cannot be empty'
        });
    }
     
    if (validator.isEmpty(name)) {
        return res.status(400)
          .json({
            status: 'Fail',
            message: 'name name cannot be empty'
          });
      }
    
   


    if (!(validator.isLength(email, { min: 5, max: 100 }))) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'email should be a minimum of 5 characters'
        });
    }

    

    if (validator.contains(email, '  ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Invalid email. Please use single whitespace'
        });
    }

    if (email !== validator.trim(email, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'name cannot end/begin with whitespace'
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

  static LoginAuth(req, res, next){
        const {
           email, password
        } = req.body;
        if (email === undefined) {
          return res.status(400)
            .json({
              status: 'Fail',
              message: 'No input was received for email'
            });
        }
        
        if (password === undefined) {   
          return res.status(400)
            .json({
              status: 'Fail',
              message: 'No input was received for password'
            });
        }
    
        
        
          if (!(validator.isEmail(email))) {
            return res.status(400)
              .json({
                status: 'Fail',
                message: 'not an email'
              });
          }
          
        
        if (validator.isEmpty(email)) {
          return res.status(400)
            .json({
              status: 'Fail',
              message: 'email name cannot be empty'
            });
        }
         
    
    
        if (!(validator.isLength(email, { min: 5, max: 100 }))) {
          return res.status(406)
            .json({
              status: 'Fail',
              message: 'email should be a minimum of 5 characters'
            });
        }
    
        
    
        if (validator.contains(email, '  ')) {
          return res.status(406)
            .json({
              status: 'Fail',
              message: 'Invalid email. Please use single whitespace'
            });
        }
    
        if (email !== validator.trim(email, ' ')) {
          return res.status(406)
            .json({
              status: 'Fail',
              message: 'name cannot end/begin with whitespace'
            });
        }
        return next();
  }
}


export default UserValidation;

