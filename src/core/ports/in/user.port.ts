import { User } from '~/core/domain/user';

export interface UserPort {
  getAllUsers(): Promise<User[]>;
  // getUserById(id: string): Promise<User>;
  // createUser(product: User): Promise<User>;
  // updateUser(id: string, product: User): Promise<User>;
  // deleteUser(id: string): Promise<void>;
}
