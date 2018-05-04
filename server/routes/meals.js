import express from 'express';
import meal from '../controllers/mealController';
import mealValidation from '../middlewares/mealValidation';

const router = express.Router();

// meal routes
router.post('/', mealValidation.AuthenticateMealInput, meal.addMeal);
router.get('/', meal.findAll);
router.put('/:mealid', mealValidation.AuthenticateMealInput, meal.updateOne);
router.delete('/:mealid', meal.removeOne);

export default router;
