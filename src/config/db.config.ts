import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_SYNCHRONIZE,
  DB_USERNAME,
} from './env.config';

export function createTypeOrmProdConfig(
  config: PostgresConnectionOptions,
): PostgresConnectionOptions {
  return {
    ...config,
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME || '',
    synchronize: DB_SYNCHRONIZE || true, //process.env.NODE_ENV === 'development',
    logger: 'advanced-console',
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm',
    poolSize: 15,
    migrationsRun: false,
    logging: false,
  };
}
