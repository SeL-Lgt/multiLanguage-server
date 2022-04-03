import express, { Express } from 'express';

const app: Express = express();

app.listen(6000, () => {
  console.log('Running on http://localhost:6000');
});
