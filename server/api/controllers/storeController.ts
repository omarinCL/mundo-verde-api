import { Request, Response } from 'express';
import responseManager from '../../common/responseManager';
import storeService from '../services/storeService';

export const getCategories = async (req: Request, res: Response) => {
  try {
    responseManager(res, storeService.getCategories());
  } catch (error) {
    responseManager(res, {
      error: error.message,
    }, 500);
  }
};
