import { Order } from '~/core/domain/order';
import { UserReward } from '~/core/domain/user-reward';

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
    public cashbackBalance: number = 0,
    public pointsBalance: number = 0,
    public orders?: Order[],
    public userRewards?: UserReward[],
  ) {}
}
