import express from 'express';
import menu from '../controllers/menuController';

const router = express.Router();

// menu routes
router.post('/', menu.addMeal);
router.get('/', menu.findAll);

export default router;
