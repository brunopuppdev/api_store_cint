import { Injectable } from '@nestjs/common';

import { User } from '~/core/domain/user';
import { UserRepositoryPort } from '~/core/ports/out/user-repository.port';
import { UserMapper } from '~/infrastructure/mappers/user.mapper';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    const prismaUsers: User[] = await this.prisma.user.findMany({
      take: 10,
    });

    return prismaUsers.map((prismaUser) => UserMapper.toDomain(prismaUser));
  }
}
