/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

import { LOGGER_PORT } from '../config/logger/logger.module';
import { WinstonLogger } from '../config/logger/winston.adapter';

type PrismaLogEvent = {
  timestamp: Date;
  message: string;
  target: string;
};

type PrismaQueryEvent = {
  timestamp: Date;
  query: string;
  params: string;
  duration: number;
  target: string;
};

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(@Inject(LOGGER_PORT) private logger: WinstonLogger) {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
        {
          emit: 'event',
          level: 'error',
        },
      ],
    });

    // Configurar eventos de log do Prisma
    this.$on('query', (event: PrismaQueryEvent) => {
      this.logger.log('debug', `Query: ${event.query}`);
    });

    this.$on('info', (event: PrismaLogEvent) => {
      this.logger.log('info', `Prisma info: ${event.message}`);
    });

    this.$on('warn', (event: PrismaLogEvent) => {
      this.logger.log('warn', `Prisma warn: ${event.message}`);
    });

    this.$on('error', (event: PrismaLogEvent) => {
      this.logger.log('error', `Prisma error: ${event.message}`);
    });
  }
  async onModuleInit() {
    await this.$connect();
    this.logger.log('info', 'PrismaService conectado com sucesso');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('info', 'PrismaService desconectado');
  }
}
