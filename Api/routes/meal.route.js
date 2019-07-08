import express from 'express';
import MealController from '../controllers/meal.controller';
const router = express.Router();

// import meal controller

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addMeal);
router.get('/:id', MealController.getSingleMeal);

export default router;
