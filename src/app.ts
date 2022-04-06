import express, { Express } from 'express';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router/index';
import errorHandler from './middleware/error-handler';
import 'reflect-metadata';

dotenv.config({
  path: path.resolve('envs', `.env.${process.env.NODE_ENV}`),
});
const { PORT } = process.env;

const app: Express = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// 挂载路由组件
app.use(router);

// 挂载统一处理服务端错误中间件
app.use(errorHandler());

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
