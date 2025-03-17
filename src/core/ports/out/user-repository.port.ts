import { User } from '~/core/domain/user';

export interface UserRepositoryPort {
  findAll(): Promise<User[]>;
  // findById(id: string): Promise<User>;
  // save(product: User): Promise<User>;
  // update(id: string, product: User): Promise<User>;
  // delete(id: string): Promise<void>;
}
