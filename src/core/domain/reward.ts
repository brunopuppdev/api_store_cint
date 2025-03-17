import { UserReward } from '~/core/domain/user-reward';

export class Reward {
  constructor(
    public id: string,
    public name: string,
    public pointsCost: number,
    public userRewards: UserReward[] = [],
    public isActive: boolean = true,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public description?: string,
  ) {}
}
