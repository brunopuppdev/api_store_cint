import { Order } from '~/core/domain/order';
import { DiscountType } from '~/core/enums/discount-type.enum';

export class Coupon {
  constructor(
    public id: number,
    public code: string,
    public discountType: DiscountType = DiscountType.PERCENTAGE,
    public discountValue: number,
    public minOrderValue?: number,
    public maxDiscountAmount?: number,
    public isActive: boolean = true,
    public expirationDate?: Date,
    public usageLimit?: number,
    public usageCount: number = 0,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public orders: Order[] = [],
  ) {}
}
