import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Yea!, we are back');
});

const port = process.env.PORT || 9002;

app.listen(port, () => console.log(`server is up on port ${port}`));
