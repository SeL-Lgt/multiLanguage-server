import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve('envs', `.env.${process.env.NODE_ENV}`),
});

const { NODE_ENV, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } =
  process.env;

const dbConfig: DataSourceOptions = {
  name: NODE_ENV,
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT as unknown as number,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [`${__dirname}/../entity/**/*{.js,.ts}`],
  namingStrategy: new SnakeNamingStrategy(),
  connectTimeout: 60000,
  acquireTimeout: 60000,
  // synchronize: true,
};

const dataSource = new DataSource(dbConfig);

export default dataSource;
