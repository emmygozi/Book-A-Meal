
import express from 'express';
import user from '../controllers/userController';
import userValid from '../middlewares/userValidation';

const router = express.Router();


// user routes
router.post('/signup', userValid.AuthenticateUserInput, user.addToken, user.decodeToken , user.signUp);
router.post('/login', userValid.LoginAuth, user.addToken, user.decodeToken ,user.login);


export default router;
