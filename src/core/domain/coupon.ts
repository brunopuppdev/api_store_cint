import { DiscountType } from '@prisma/client';
import { Order } from '~/core/domain/order';

export class Coupon {
  id: number;
  code: string;
  discountType: DiscountType;
  discountValue: number;
  minOrderValue: number | null;
  maxDiscountAmount: number | null;
  isActive: boolean = true;
  expirationDate: Date | null;
  usageLimit: number | null;
  usageCount: number;
  createdAt: Date;
  updatedAt: Date;
  orders?: Order[];

  constructor(partial: Partial<Coupon>) {
    Object.assign(this, partial);
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.orders = this.orders || [];
    this.usageCount = this.usageCount || 0;
  }
}
