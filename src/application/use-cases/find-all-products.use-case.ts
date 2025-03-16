import { Injectable } from '@nestjs/common';
import { Product } from '../../core/domain/product';
import { ProductRepository } from '../../core/ports/product-repository.port';

@Injectable()
export class FindAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}
  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
