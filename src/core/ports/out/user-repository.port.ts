import { User } from '~/core/domain/user';

export interface UserRepositoryPort {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<User>;
  // update(id: string, user: User): Promise<User>;
  // delete(id: string): Promise<void>;
}
