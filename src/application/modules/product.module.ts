import { Module, Type } from '@nestjs/common';

import { ProductController } from '~/application/controllers/product.controller';
import { TOKENS } from '~/core/constants/injection-tokens';
import { ProductRepositoryPort } from '~/core/ports/out/product-repository.port';
import { ProductService } from '~/core/services/product.service';
import { ProductRepository } from '~/infrastructure/repositories/product.repository';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: TOKENS.REPOSITORIES.PRODUCT_REPOSITORY,
      useClass: ProductRepository as Type<ProductRepositoryPort>,
    },
  ],
  exports: [ProductService],
})
export class ProductModule {}
