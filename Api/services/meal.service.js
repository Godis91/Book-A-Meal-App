import DummyData from '../utils/DummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const validMeals = DummyData.meals.map(meal => {
      const { id, name, size, price } = meal;
      const newMeal = { id, name, size, price };
      return newMeal;
    });
    return validMeals;
  },

  addMeal(meal) {
    const mealLength = DummyData.meals.length;
    const lastId = DummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;

    DummyData.meals.push(meal);
    return meal;
  },

  getMealById(id) {
    const meal = DummyData.meals.find(meal => meal.id === id);
    return meal || {};
  }
};

export default MealService;
