import { Application } from 'express';
import storeRoutes from './storeRoutes';
import { basePath } from '../../common/environmentManager';

export default function routes(app: Application): void {
  app.use(`${basePath}/`, [storeRoutes]);
}
