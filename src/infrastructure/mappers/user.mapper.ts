import { Injectable } from '@nestjs/common';

import { User, UserCreated } from '~/core/domain/user';
import { UserCreateDto } from '~/core/dto/user/user-create.dto';
import { UserResponseDto } from '~/core/dto/user/user-response.dto';

@Injectable()
export class UserMapper {
  toEntity(dto: UserCreateDto): User {
    return new User({
      name: dto.name,
      email: dto.email,
      password: dto.password,
    });
  }

  toDto(entity: User): UserResponseDto {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      pointsBalance: entity.pointsBalance,
      cashbackBalance: entity.cashbackBalance,
      orders: entity.orders,
      userRewards: entity.userRewards,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  toCreateDto(entity: User): UserCreated {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
