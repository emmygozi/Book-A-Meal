import express from 'express';
import order from '../controllers/orderController';
import user from '../controllers/userController';
import userValidation from '../middlewares/ordersValidation';


const router = express.Router();

// order routes
router.post('/', userValidation.AuthenticateOrderInput, user.addToken, user.decodeToken , order.addOrders);
router.get('/', order.findAll);
router.put('/:mealid', userValidation.AuthenticateOrderInput, user.addToken, user.decodeToken , order.updateOne);
router.delete('/:mealid', order.removeOne);


export default router;
