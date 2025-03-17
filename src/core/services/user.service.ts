import { Inject, Injectable } from '@nestjs/common';

import { TOKENS } from '~/core/constants/injection-tokens';
import { User } from '~/core/domain/user';
import { UserRepositoryPort } from '~/core/ports/out/user-repository.port';

@Injectable()
export class UserService {
  constructor(
    @Inject(TOKENS.REPOSITORIES.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
