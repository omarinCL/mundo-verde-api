import { Response } from 'express';

const responseManager = <T = any>(res: Response, entity: T, statusCode?: number) => {
  if (entity) return res.status(statusCode || 200).json(entity);
  return res.status(404).end();
};

export default responseManager;
