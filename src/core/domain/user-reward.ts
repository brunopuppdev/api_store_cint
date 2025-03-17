import { Reward } from '~/core/domain/reward';
import { User } from '~/core/domain/user';

export class UserReward {
  constructor(
    public id: string,
    public userId: string,
    public user: User,
    public rewardId: string,
    public reward: Reward,
    public redeemedAt: Date = new Date(),
  ) {}
}
