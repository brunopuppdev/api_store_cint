import { Product } from '~/core/domain/product';

export interface ProductPort {
  getAllProducts(): Promise<Product[]>;
  // getProductById(id: string): Promise<Product>;
  // createProduct(product: Product): Promise<Product>;
  // updateProduct(id: string, product: Product): Promise<Product>;
  // deleteProduct(id: string): Promise<void>;
}
