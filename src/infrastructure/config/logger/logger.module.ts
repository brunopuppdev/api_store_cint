import { Global, Module } from '@nestjs/common';

import { WinstonLogger } from './winston.adapter';

export const LOGGER_PORT = Symbol('LoggerPort');

@Global()
@Module({
  providers: [
    {
      provide: LOGGER_PORT,
      useClass: WinstonLogger,
    },
  ],
  exports: [LOGGER_PORT],
})
export class LoggerModule {}
