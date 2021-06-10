import pino from 'pino';
import { logLevel } from './environmentManager';

export default function logger() {
  return pino({
    level: logLevel,
    base: null,
  });
}

export type PinoLogger = pino.Logger;
