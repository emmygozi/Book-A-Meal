import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import users from '../model/user';


/**
 * @class User
 */
class User {
  /**
     * @desc create a new Orders
     * @returns {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static signUp(req, res) {
    const {
      name, email
    } = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const id = users[users.length - 1].id + 1;
    const addedUser = {
      id,
      name,
      email,
      password
    };
    const mailfound = users.find(user => user.email.toLowerCase() === email.toLowerCase());

    if (!mailfound) {
      users.push(addedUser);
    } else {
      res.status(409).json('Email not available. Please use another.');
    }
    
    return res.status(201).json({
      newUser: addedUser,
      message: 'Account successfully created',
      status: 'Success'
    });
  }
  /**
     * @desc create a new Orders
     * @returns {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static login(req, res) {
    const { email } = req.body;
    const foundUser = users.find(user => user.email === email);
    if (foundUser) {
      if (email.toLowerCase()) {
        return res.status(200).json({
          message: `Hello '${foundUser.name}', your login was successful`
        });
      }
      return res.status(401).json({
        status: 'Fail',
        message: 'Incorrect Password '
      });
    }
    return res.status(401).json({
      message: 'Email does not exist. Input a valid email or sign up'
    });
  }
  /**
     * @desc create a new Orders
     * @returns {object} json
     * @param {object} req object
     * @param {object} res object
     * @param {object} next object
     */
  static decodeToken(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.status(403).json(`${req.user.id}Access denied!`);
    }
  }

  static addToken(req, res, next){
   const { id } = req.body.id;

    const token = jwt.sign( id , 'Supersecret', {
      expiresIn: 86400 // expires in 24 hours
    });
    res.json(token);
    next();
  }
}

export default User;
