import express from 'express';
import meal from '../controllers/mealController';
import order from '../controllers/orderController';
import menu from '../controllers/menuController';

const router = express.Router();

// meal routes
router.post('/api/v1/meal', meal.addMeal);
router.get('/api/v1/meal', meal.findAll);
router.put('/api/v1/meal/:mealid', meal.updateOne);

// order routes
router.post('/api/v1/order', order.addMeal);
router.get('/api/v1/order', order.findAll);
router.put('/api/v1/order/:orderid', order.updateOne);

// menu routes
router.post('/api/v1/menu', menu.addMeal);
router.get('/api/v1/menu', menu.findAll);


export default router;
