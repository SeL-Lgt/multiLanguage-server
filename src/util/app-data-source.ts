import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const devDB: DataSourceOptions = {
  name: 'dev',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '981002',
  database: 'language_i18n',
  entities: ['./src/entity/*{.js,.ts}'],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
};

const prodDB: DataSourceOptions = {
  name: 'prod',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'db2',
  entities: ['./src/entity/*{.js,.ts}'],
  namingStrategy: new SnakeNamingStrategy(),
};

const myDataSource = new DataSource(
  process.env.NODE_ENV === 'prod' ? prodDB : devDB,
);

export default myDataSource;
