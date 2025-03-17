import { Order } from '~/core/domain/order';
import { User } from '~/core/domain/user';
import { UserReward } from '~/core/domain/user-reward';

interface PrismaUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  orders: Order[] | undefined;
  userRewards: UserReward[] | undefined;
  cashbackBalance: number;
  pointsBalance: number;
}

function isPrismaUser(obj: unknown): obj is PrismaUser {
  const user = obj as Partial<PrismaUser>;

  return (
    typeof user === 'object' &&
    user !== null &&
    typeof user.id === 'string' &&
    typeof user.name === 'string' &&
    typeof user.email === 'string' &&
    typeof user.password === 'string' &&
    typeof user.createdAt === 'object' &&
    typeof user.updatedAt === 'object' &&
    Array.isArray(user.orders) &&
    Array.isArray(user.userRewards) &&
    typeof user.cashbackBalance === 'number' &&
    typeof user.pointsBalance === 'number'
  );
}

export class UserMapper {
  static toDomain(prismaUserData: unknown): User {
    if (!isPrismaUser(prismaUserData)) {
      throw new Error('Invalid Prisma Product data');
    }

    const prismaUser: PrismaUser = prismaUserData;

    return {
      id: prismaUser.id,
      name: prismaUser.name,
      cashbackBalance: prismaUser.cashbackBalance,
      createdAt: prismaUser.createdAt,
      email: prismaUser.email,
      orders: prismaUser.orders,
      password: prismaUser.password,
      pointsBalance: prismaUser.pointsBalance,
      updatedAt: prismaUser.updatedAt,
      userRewards: prismaUser.userRewards,
    };
  }

  static toPesrsistence(
    domainUser: User,
  ): Omit<PrismaUser, 'id' | 'createdAt' | 'updatedAt'> {
    return {
      name: domainUser.name,
      cashbackBalance: domainUser.cashbackBalance,
      password: domainUser.password,
      pointsBalance: domainUser.pointsBalance,
      orders: domainUser.orders,
      email: domainUser.email,
      userRewards: domainUser.userRewards,
    };
  }
}
