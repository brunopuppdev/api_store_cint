import { Product } from '../../domain/product';

export interface ProductRepositoryPort {
  findAll(): Promise<Product[]>;
  // findById(id: string): Promise<Product>;
  // save(product: Product): Promise<Product>;
  // update(id: string, product: Product): Promise<Product>;
  // delete(id: string): Promise<void>;
}
