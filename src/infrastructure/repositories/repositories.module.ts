import { Module } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '../../core/ports/constants/injection-tokens';
import { PrismaService } from '../services/prisma.service';
import { PrismaProductRepository } from '../adapters/prisma-product-repository.adapter';

@Module({
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
