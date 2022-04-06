import express, { Express } from 'express';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve('envs', `.env.${process.env.NODE_ENV}`),
});
const { PORT } = process.env;

const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
