import { Request, Response, NextFunction } from 'express';
import log from '../common/logger';

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (res.headersSent) {
    next(err);
  }

  log().error({
    stackTrace: err.stack,
  });

  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
}
