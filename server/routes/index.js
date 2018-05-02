import express from 'express';
import meal from '../controllers/mealController';
import order from '../controllers/orderController';
import menu from '../controllers/menuController';
import user from '../controllers/userController';

const router = express.Router();

// users route
router.post('/api/v1/user', user.addusers);
router.get('/api/v1/user', user.findAll);

// meal routes
router.post('/api/v1/meals', meal.addMeal);
router.get('/api/v1/meals', meal.findAll);
router.put('/api/v1/meals/:mealid', meal.updateOne);
router.delete('/api/v1/meals/:mealid', meal.removeOne);

// order routes
router.post('/api/v1/orders', order.addOrders);
router.get('/api/v1/orders', order.findAll);
router.put('/api/v1/orders/:orderid', order.updateOne);
router.delete('/api/v1/orders/:orderid', order.removeOne);

// menu routes
router.post('/api/v1/menu', menu.addMeal);
router.get('/api/v1/menu', menu.findAll);


export default router;
