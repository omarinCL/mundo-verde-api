import { Request, Response } from 'express';
import responseManager from '../../common/responseManager';
import storeService from '../services/storeService';

export const getCategories = async (req: Request, res: Response) => {
  try {
    responseManager(res, storeService.getCategories(req.params.categoryId));
  } catch (error) {
    responseManager(res, {
      error: error.message,
    }, 500);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    responseManager(res, storeService.getProducts(req.params.categoryId, req.params.productId));
  } catch (error) {
    responseManager(res, {
      error: error.message,
    }, 500);
  }
};
