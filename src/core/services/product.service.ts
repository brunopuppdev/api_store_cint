import { Inject, Injectable } from '@nestjs/common';

import { TOKENS } from '~/core/constants/injection-tokens';
import { Product } from '~/core/domain/product';
import { ProductRepositoryPort } from '~/core/ports/out/product-repository.port';

@Injectable()
export class ProductService {
  constructor(
    @Inject(TOKENS.REPOSITORIES.PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepositoryPort,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
