import { Module } from '@nestjs/common';

import { ProductModule } from '~/application/modules/product.module';

import { LoggerModule } from './infrastructure/config/logger/logger.module';
import { PrismaModule } from './infrastructure/services/prisma.module';

@Module({
  imports: [LoggerModule, PrismaModule, ProductModule],
})
export class AppModule {}
