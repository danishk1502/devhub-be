import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3001;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const DB_TYPE = (process.env.DB_TYPE as any) || 'postgres';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT || '5432', 10);
export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASS || '';
export const DB_NAME = process.env.DB_NAME || 'devhub';
export const DB_SYNCHRONIZE = process.env.DB_SYNCHRONIZE === 'true';
export const DB_LOGGING = process.env.DB_LOGGING === 'true';
