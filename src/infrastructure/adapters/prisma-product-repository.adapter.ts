import { Injectable } from '@nestjs/common';

import { Product } from '../../core/domain/product';
import { ProductRepository } from '../../core/ports/product-repository.port';
import { ProductMapper } from '../mappers/product.mapper';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    const prismaProducts: Product[] = await this.prisma.product.findMany({
      take: 10,
    });

    return prismaProducts.map((prismaProduct) =>
      ProductMapper.toDomain(prismaProduct),
    );
  }
}
