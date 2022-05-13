import express, { Express } from 'express';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import 'reflect-metadata';
import 'module-alias/register';

import router from '@router/index';
import errorHandler from '@middleware/error-handler';
import dataSource from '@util/app-data-source';

dotenv.config({
  path: path.resolve('envs', `.env.${process.env.NODE_ENV}`),
});
const { PORT } = process.env;

dataSource
  .initialize()
  .then(() => {
    console.log('已连接数据库');
  })
  .catch((err) => {
    console.log(`连接失败：${err}`);
  });

const app: Express = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// 挂载路由组件
app.use('/api', router);

// 挂载统一处理服务端错误中间件
app.use(errorHandler());

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
