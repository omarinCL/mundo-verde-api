import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 80;
export const appId = process.env.APP_ID;
export const nodeEnv = process.env.NODE_ENV;
export const basePath = process.env.BASE_PATH;
export const logLevel = process.env.LOG_LEVEL;
export const mongodbUri = process.env.MONGODB_URI;
export const requestLimit = process.env.REQUEST_LIMIT;
export const swaggerApiSpec = process.env.SWAGGER_API_SPEC;
