import { Order } from '~/core/domain/order';
import { UserReward } from '~/core/domain/user-reward';

export class User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  cashbackBalance: number;
  pointsBalance: number;
  password: string;
  orders?: Order[];
  userRewards?: UserReward[];
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export class UserCreated {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
