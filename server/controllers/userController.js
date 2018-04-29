import bcrypt from 'bcrypt';
import uuidv4 from 'uuid/v4';
import dummydb from '../model/user';
import userAuth from '../Auth/authenticateuser';
import tokenAuth from '../Auth/userToken';
// import validateRouteId from '../routes/validateid';

/**
 * @class Orders
 */
class Users {
  /**
     * @desc create a new Orders
     * @returns {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static addusers(req, res) {
    const uniqueuser = userAuth.autheticuser(req.body.userunique);
    const emailaddr = userAuth.userAdd(req.body.email);
    const pw = userAuth.passwordAdd(req.body.password);


    if ((emailaddr !== false) || (pw !== false) || (uniqueuser !== false)) {
      bcrypt.hash(pw, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        }
        const unique = uuidv4('Hello, World!', uniqueuser);
        const newuser = { emailaddr, hash, unique };
        dummydb.push(newuser);

        return res.status(201).json(`${emailaddr} is added as a new user  Auth token is ${tokenAuth}`);
      });
    }
    if ((uniqueuser === false) || (emailaddr === false) || (pw === false)) {
      return res.status(201).json('faulty input. please review and retry!');
    }
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static findAll(req, res) {
    if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }

    return res.status(200).json({ Users: dummydb });
  }
}

export default Users;
