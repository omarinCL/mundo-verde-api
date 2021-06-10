import mongoose from 'mongoose';

export const parseToObjectId = (id: string) => mongoose.Types.ObjectId(id);

export const parseEnv = <T = any>(envVar = '{}') => {
  try {
    return JSON.parse(envVar) as T;
  } catch {
    throw new Error(`Error al transformar la variable de entorno ${envVar}`);
  }
};
