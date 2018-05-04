
import express from 'express';
import user from '../controllers/userController';
import userValid from '../middlewares/userValidation';

const router = express.Router();


// user routes
router.post('/signup', userValid.AuthenticateUserInput, user.signUp);
router.post('/login', userValid.LoginAuth, user.login);


export default router;
