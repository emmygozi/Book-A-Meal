import express from 'express';
import order from '../controllers/orderController';
import userValidation from '../middlewares/ordersValidation';


const router = express.Router();

// order routes
router.post('/', userValidation.AuthenticateOrderInput, order.addOrders);
router.get('/', order.findAll);
router.put('/:mealid', userValidation.AuthenticateOrderInput, order.updateOne);
router.delete('/:mealid', order.removeOne);


export default router;
