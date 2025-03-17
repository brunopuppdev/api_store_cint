import { Global, Module } from '@nestjs/common';

import { PrismaService } from '~/infrastructure/services/prisma.service';

import { LoggerModule } from '../config/logger/logger.module';

@Global()
@Module({
  imports: [LoggerModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
