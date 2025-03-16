import { Product } from '../domain/product';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
}
