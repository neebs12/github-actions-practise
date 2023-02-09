import express from 'express';
import { addOne } from './utils/helper';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World! @ GET'});
});

app.post('/', (req, res) => {
  const { number } = req.body;
  const result = addOne(number);
  res.status(200).json({message: result});
});

export { app };