import express, { Application } from 'express';
import { Express } from 'express-serve-static-core';
import actuator from 'express-actuator';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import * as validator from 'express-openapi-validator';
import l from './logger';
import 'reflect-metadata';
import {
  nodeEnv,
  requestLimit,
  swaggerApiSpec,
  mongodbUri,
} from './environmentManager';
import errorHandler from '../middleware/errorHandler';
import connect from './dbCLient';

export default class ExpressServer {
  private routes: (app: Application) => void;

  private app: Express;

  constructor() {
    this.app = express();
  }

  private initMiddleware() {
    const root = path.normalize(`${__dirname}/../..`);
    const apiSpec = path.join(root, 'server/apispec.yml');
    this.app.disable('x-powered-by');
    this.app.use(bodyParser.json({ limit: requestLimit || '100kb' }));
    this.app.use(bodyParser.urlencoded({ extended: true, limit: requestLimit || '100kb' }));
    this.app.use(bodyParser.text({ limit: requestLimit || '100kb' }));
    this.app.use(actuator());
    this.app.use('/', express.static(`${root}/public/swaggerUI`));
    this.app.use(swaggerApiSpec, express.static(apiSpec));
    this.app.use(cors());
    this.app.use(validator.middleware({
      apiSpec,
      validateRequests: false,
      validateSecurity: false,
    }));
    this.routes(this.app);
    this.app.use(errorHandler);
  }

  router(routes: (app: Application) => void): ExpressServer {
    this.routes = routes;
    return this;
  }

  listen(port: number) {
    try {
      if (mongodbUri) connect(mongodbUri);
      this.initMiddleware();
      http.createServer(this.app).listen(port);
      l().info(`Server up and running in ${nodeEnv || 'development'} on port ${port}`);
    } catch (error) {
      l().error(error);
      process.exit(1);
    }

    return this.app;
  }
}
