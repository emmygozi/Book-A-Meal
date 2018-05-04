import express from 'express';
import meal from '../controllers/mealController';
import mealValidation from '../middlewares/mealValidation';
import user from '../controllers/userController';

const router = express.Router();

// meal routes
router.post('/', user.addToken, user.decodeToken , mealValidation.AuthenticateMealInput, meal.addMeal);
router.get('/', user.addToken, user.decodeToken , meal.findAll);
router.put('/:mealid', user.addToken, user.decodeToken , mealValidation.AuthenticateMealInput, meal.updateOne);
router.delete('/:mealid', user.addToken, user.decodeToken , meal.removeOne);

export default router;
