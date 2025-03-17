import { Injectable } from '@nestjs/common';

import { Product } from '~/core/domain/product';
import { ProductRepositoryPort } from '~/core/ports/out/product-repository.port';
import { ProductMapper } from '~/infrastructure/mappers/product.mapper';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ProductRepository implements ProductRepositoryPort {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    const prismaProducts: Product[] = await this.prisma.product.findMany({
      take: 10,
    });

    return prismaProducts.map((prismaProduct) =>
      ProductMapper.toDomain(prismaProduct),
    );
  }
}
