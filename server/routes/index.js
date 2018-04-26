import express from 'express';
import meal from '../controllers/mealController';
import order from '../controllers/orderController';
import menu from '../controllers/menuController';

const router = express.Router();

// meal routes
router.post('/api/v1/meals', meal.addMeal);
router.get('/api/v1/meals', meal.findAll);

// order routes
router.post('/api/v1/order', order.addMeal);
router.get('/api/v1/order', order.findAll);

// menu routes
router.post('/api/v1/menu', menu.addMeal);
router.get('/api/v1/menu', menu.findAll);


export default router;
