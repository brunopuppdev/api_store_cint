import { Coupon } from '~/core/domain/coupon';
import { OrderItem } from '~/core/domain/order-item';
import { User } from '~/core/domain/user';
import { OrderStatus } from '~/core/enums/order-status.enum';

export class Order {
  constructor(
    public id: number,
    public userId: string,
    public user: User,
    public status: OrderStatus = OrderStatus.PENDING,
    public totalAmount: number,
    public discountAmount: number = 0,
    public finalAmount: number,
    public couponId?: number,
    public coupon?: Coupon,
    public cashbackEarned: number = 0,
    public cashbackUsed: number = 0,
    public pointsEarned: number = 0,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public orderItems: OrderItem[] = [],
  ) {}
}
