import { Injectable } from '@nestjs/common';

import { User } from '~/core/domain/user';
import { UserRepositoryPort } from '~/core/ports/out/user-repository.port';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}
  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
