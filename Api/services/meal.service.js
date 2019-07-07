import DummyData from '../utils/DummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const validMeals = DummyData.meals.map(meal => {
      const { id, name, size, price } = meal;
      return Meal(id, name, size, price);
    });
    return validMeals;
  },

  addMeal(meal) {
    const mealLength = DummyData.meals.length;
    const lastId = DummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;

    DummyData.push(meal);
    return meal;
  },

  getMealById(id) {
    DummyData.meals.find(meal => meal.id === id);
    return meal || {};
  }
};

export default MealService;
