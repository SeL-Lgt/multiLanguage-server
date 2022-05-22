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
  entities: [`${__dirname}/../entity/**/*{.js,.ts}`],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
};

const prodDB: DataSourceOptions = {
  name: 'prod',
  type: 'mysql',
  host: '106.55.241.206',
  port: 3306,
  username: 'test',
  password: '981002',
  database: 'language_i18n',
  entities: [`${__dirname}/../entity/**/*{.js,.ts}`],
  namingStrategy: new SnakeNamingStrategy(),
};

const dataSource = new DataSource(
  process.env.NODE_ENV === 'prod' ? prodDB : devDB,
);

export default dataSource;
