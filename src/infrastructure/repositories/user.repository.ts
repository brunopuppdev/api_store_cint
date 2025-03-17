import { Injectable } from '@nestjs/common';

import { User } from '~/core/domain/user';
import { UserRepositoryPort } from '~/core/ports/out/user-repository.port';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      take: 10,
    });
  }
}
