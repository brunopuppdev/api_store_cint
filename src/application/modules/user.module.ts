import { Module, Type } from '@nestjs/common';

import { UserController } from '~/application/controllers/user.controller';
import { TOKENS } from '~/core/constants/injection-tokens';
import { UserRepositoryPort } from '~/core/ports/out/user-repository.port';
import { UserService } from '~/core/services/user.service';
import { UserRepository } from '~/infrastructure/repositories/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: TOKENS.REPOSITORIES.USER_REPOSITORY,
      useClass: UserRepository as Type<UserRepositoryPort>,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
