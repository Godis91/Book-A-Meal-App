import express from 'express';

import mealRoutes from './routes/meal.route';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Yea!, we are back');
});

app.use('/api/v1/meals', mealRoutes);

const port = process.env.PORT || 9002;

app.listen(port, () => console.log(`server is up on port ${port}`));
