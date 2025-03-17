import { Injectable } from '@nestjs/common';

import { Product } from '~/core/domain/product';
import { ProductRepositoryPort } from '~/core/ports/out/product-repository.port';

@Injectable()
export class FindAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepositoryPort) {}
  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
