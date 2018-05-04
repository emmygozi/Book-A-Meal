import express from 'express';
import meals from '../routes/meals';
import menu from '../routes/menu';
import orders from '../routes/orders';
import  user from '../routes/user';

const router = express.Router();

router.use('/api/v1/meals', meals);
router.use('/api/v1/menu', menu);
router.use('/api/v1/orders', orders);
router.use('/api/v1/', user);

export default router;
