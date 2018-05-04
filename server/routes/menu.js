import express from 'express';
import menu from '../controllers/menuController';
import user from '../controllers/userController';

const router = express.Router();

// menu routes
router.post('/', user.addToken, user.decodeToken , menu.addMeal);
router.get('/', user.addToken, user.decodeToken , menu.findAll);

export default router;
