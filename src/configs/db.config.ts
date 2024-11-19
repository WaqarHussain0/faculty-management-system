import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const DatabaseConfig = (): DataSourceOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST ,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_DATABASE ,
  username: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,

  logging: false,
  entities: ['./dist/**/*schema.{ts,js}'],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  cache: true,
});

export default DatabaseConfig;
