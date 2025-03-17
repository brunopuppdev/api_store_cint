import { Injectable } from '@nestjs/common';

import { Coupon } from '~/core/domain/coupon';
import { CreateCouponDto } from '~/core/dto/coupon/create-coupon.dto';
import { UpdateCouponDto } from '~/core/dto/coupon/update-coupon.dto';
import { CouponRepositoryPort } from '~/core/ports/out/coupon-repository.port';
import { PrismaService } from '~/infrastructure/services/prisma.service';

@Injectable()
export class CouponRepository implements CouponRepositoryPort {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCouponDto): Promise<Coupon> {
    return this.prisma.coupon.create({
      data,
    });
  }

  async findAll(): Promise<Coupon[]> {
    return this.prisma.coupon.findMany();
  }

  async findById(id: number): Promise<Coupon | null> {
    return this.prisma.coupon.findUnique({
      where: { id },
    });
  }

  async findByCode(code: string): Promise<Coupon | null> {
    return this.prisma.coupon.findUnique({
      where: { code },
    });
  }

  async update(id: number, data: UpdateCouponDto): Promise<Coupon> {
    return this.prisma.coupon.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Coupon> {
    return this.prisma.coupon.delete({
      where: { id },
    });
  }

  async incrementUsageCount(id: number): Promise<Coupon> {
    return this.prisma.coupon.update({
      where: { id },
      data: {
        usageCount: {
          increment: 1,
        },
      },
    });
  }
}
