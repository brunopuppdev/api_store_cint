import { CashbackType } from '@prisma/client';
import { Product } from '~/core/domain/product';

interface PrismaProduct {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  cashbackType: CashbackType;
  cashbackValue: number;
  pointsValue: number;
  image: string;
  category: string;
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
    typeof product.status === 'string' &&
    typeof product.cashbackType === 'string' &&
    typeof product.cashbackValue === 'number' &&
    typeof product.pointsValue === 'number'
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
      description: prismaProduct.description || undefined,
      price: prismaProduct.price,
      stock: prismaProduct.stock,
      cashbackType: prismaProduct.cashbackType,
      cashbackValue: prismaProduct.cashbackValue,
      pointsValue: prismaProduct.pointsValue,
      image: prismaProduct.image,
      category: prismaProduct.category,
      status: prismaProduct.status,
    } as Product;
  }

  static toPersistence(
    domainProduct: Product,
  ): Omit<PrismaProduct, 'id' | 'createdAt' | 'updatedAt'> {
    return {
      name: domainProduct.name,
      description: domainProduct.description || null,
      price: domainProduct.price,
      stock: domainProduct.stock,
      cashbackType: domainProduct.cashbackType,
      cashbackValue: domainProduct.cashbackValue,
      pointsValue: domainProduct.pointsValue,
      image: domainProduct.image,
      category: domainProduct.category,
      status: domainProduct.status,
    };
  }
}
