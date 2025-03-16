import { Injectable } from '@nestjs/common';
import { LoggerPort } from '../../../core/ports/output/logger.port';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

interface TransformableInfo {
  level: string;
  message: string;
  LEVEL: string;
  MESSAGE: string;
  SPLAT: string;
  [p: string]: string;
  [p: symbol]: string;
}

@Injectable()
export class WinstonLogger implements LoggerPort {
  private logger: winston.Logger;

  constructor() {
    const customFormat = winston.format.printf((info: TransformableInfo) => {
      const timestamp: string = info.timestamp || '';
      const level: string = info.level || '';
      const context = info.context ? '[' + info.context + ']' : '';
      const message: string = info.message || '';

      return `[${timestamp}] ${level} ${context} ${message}`;
    });

    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.colorize(),
            customFormat,
          ),
        }),
        new winston.transports.DailyRotateFile({
          filename: 'logs/application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '14d',
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.json(),
          ),
        }),
      ],
    });
  }

  debug(message: string, context?: string): void {
    this.logger.debug(message, { context });
  }

  log(message: string, context?: string): void {
    this.logger.info(message, { context });
  }

  error(message: string, trace?: string, context?: string): void {
    this.logger.error(message, { context, trace });
  }

  warn(message: string, context?: string): void {
    this.logger.warn(message, { context });
  }

  verbose(message: string, context?: string): void {
    this.logger.verbose(message, { context });
  }
}
