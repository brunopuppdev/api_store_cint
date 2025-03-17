import { WinstonLogger } from './winston.adapter';

class LoggerSingleton {
  private static instance: WinstonLogger | null = null;

  static getInstance(): WinstonLogger {
    if (!LoggerSingleton.instance) {
      LoggerSingleton.instance = new WinstonLogger();
    }
    return LoggerSingleton.instance;
  }
}

export const logger = LoggerSingleton.getInstance();
