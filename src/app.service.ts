import { Inject, Injectable } from '@nestjs/common';

import { Product } from './core/domain/product';
import { PRODUCT_REPOSITORY } from './core/ports/constants/injection-tokens';
import { ProductRepository } from './core/ports/product-repository.port';

@Injectable()
export class AppService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
