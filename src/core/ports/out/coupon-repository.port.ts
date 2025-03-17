import { Coupon } from '~/core/domain/coupon';
import { CreateCouponDto } from '~/core/dto/coupon/create-coupon.dto';

export interface CouponRepositoryPort {
  create(data: CreateCouponDto): Promise<Coupon>;
  findAll(): Promise<Coupon[]>;
  findById(id: number): Promise<Coupon | null>;
  findByCode(code: string): Promise<Coupon | null>;
  update(id: number, data: Partial<Coupon>): Promise<Coupon>;
  delete(id: number): Promise<Coupon>;
  incrementUsageCount(id: number): Promise<Coupon>;
}
