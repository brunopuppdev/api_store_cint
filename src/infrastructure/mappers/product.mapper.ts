// src/infrastructure/mappers/product.mapper.ts
import { Product } from '../../core/domain/product';

// Defina explicitamente a interface
interface PrismaProduct {
  id: number;
  name: string;
  price: number;
  description: string | null;
  image: string;
  category: string;
  stock: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// Função para validar se o objeto é do tipo esperado
function isPrismaProduct(obj: unknown): obj is PrismaProduct {
  const product = obj as Partial<PrismaProduct>;
  return (
    typeof product === 'object' &&
    product !== null &&
    typeof product.id === 'number' &&
    typeof product.name === 'string' &&
    typeof product.price === 'number' &&
    typeof product.image === 'string' &&
    typeof product.category === 'string' &&
    typeof product.stock === 'number' &&
    typeof product.status === 'string'
  );
}

export class ProductMapper {
  static toDomain(prismaProductData: unknown): Product {
    // Validar o objeto antes de usá-lo
    if (!isPrismaProduct(prismaProductData)) {
      throw new Error('Invalid Prisma Product data');
    }

    const prismaProduct: PrismaProduct = prismaProductData;

    return {
      id: prismaProduct.id,
      name: prismaProduct.name,
      price: prismaProduct.price,
      description: prismaProduct.description || undefined,
      image: prismaProduct.image,
      category: prismaProduct.category,
      stock: prismaProduct.stock,
      status: prismaProduct.status,
    } as Product;
  }

  static toPersistence(
    domainProduct: Product,
  ): Omit<PrismaProduct, 'id' | 'createdAt' | 'updatedAt'> {
    return {
      name: domainProduct.name,
      price: domainProduct.price,
      description: domainProduct.description || null,
      image: domainProduct.image,
      category: domainProduct.category,
      stock: domainProduct.stock,
      status: domainProduct.status,
    };
  }
}
