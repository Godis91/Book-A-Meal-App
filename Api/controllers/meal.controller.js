import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    res
      .send({
        status: 'success',
        data: allMeals
      })
      .status(200);
  },

  addMeal(req, res) {
    const newMeal = req.body;

    const createdMeal = MealService.addMeal(newMeal);

    res
      .send({
        status: 'success',
        data: createdMeal
      })
      .status(201);
  },

  getSingleMeal(req, res) {
    const id = req.params.id;
    const foundMeal = MealService.getMealById(id);
    res.send({
      status: 'success',
      data: foundMeal
    });
  }
};

export default MealController;
