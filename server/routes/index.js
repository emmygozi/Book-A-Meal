import express from 'express';
import meal from '../controllers/mealController';
import order from '../controllers/orderController';
import menu from '../controllers/menuController';
import user from '../controllers/userController';
import mealValidation from '../middlewares/mealValidation';
import userValidation from '../middlewares/ordersValidation';
import userValid from '../middlewares/userValidation';

const router = express.Router();


// meal routes
router.post('/api/v1/meals', mealValidation.AuthenticateMealInput, meal.addMeal);
router.get('/api/v1/meals', meal.findAll);
router.put('/api/v1/meals/:mealid', mealValidation.AuthenticateMealInput, meal.updateOne);
router.delete('/api/v1/meals/:mealid', meal.removeOne);

// order routes
router.post('/api/v1/orders', userValidation.AuthenticateOrderInput, order.addOrders);
router.get('/api/v1/orders', order.findAll);
router.put('/api/v1/orders/:orderid', userValidation.AuthenticateOrderInput, order.updateOne);
router.delete('/api/v1/orders/:orderid', order.removeOne);

// menu routes
router.post('/api/v1/menu', menu.addMeal);
router.get('/api/v1/menu', menu.findAll);

// user routes
router.post('/api/v1/signup', userValid.AuthenticateUserInput, user.signUp);
router.post('/api/v1/login', userValid.LoginAuth, user.login);


export default router;
