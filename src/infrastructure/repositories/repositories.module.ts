import { Module } from '@nestjs/common';

import { PRODUCT_REPOSITORY } from '~/core/ports/constants/injection-tokens';

import { PrismaProductRepository } from '../adapters/prisma-product-repository.adapter';
import { LoggerModule } from '../config/logger/logger.module';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [LoggerModule],
  providers: [
    PrismaService,
    {
      provide: PRODUCT_REPOSITORY,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [PRODUCT_REPOSITORY],
})
export class RepositoriesModule {}
