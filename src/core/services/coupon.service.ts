import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Coupon } from '~/core/domain/coupon';
import { CreateCouponDto } from '~/core/dto/coupon/create-coupon.dto';
import { UpdateCouponDto } from '~/core/dto/coupon/update-coupon.dto';
import { logger } from '~/infrastructure/config/logger/logger.singleton';
import { CouponRepository } from '~/infrastructure/repositories/coupon.repository';

@Injectable()
export class CouponService {
  constructor(private couponRepository: CouponRepository) {}

  async create(createCouponDto: CreateCouponDto): Promise<Coupon> {
    const existingCoupon = await this.couponRepository.findByCode(
      createCouponDto.code,
    );
    if (existingCoupon) {
      throw new BadRequestException(
        `Cupom com código '${createCouponDto.code}' já existe`,
      );
    }

    return this.couponRepository.create(createCouponDto);
  }

  async findAll(): Promise<Coupon[]> {
    return this.couponRepository.findAll();
  }

  async findById(id: number): Promise<Coupon> {
    const coupon = await this.couponRepository.findById(id);
    if (!coupon) {
      throw new NotFoundException(`Cupom com ID ${id} não encontrado`);
    }
    return coupon;
  }

  async findByCode(code: string): Promise<Coupon> {
    const coupon = await this.couponRepository.findByCode(code);
    if (!coupon) {
      throw new NotFoundException(`Cupom com código '${code}' não encontrado`);
    }
    return coupon;
  }

  async update(id: number, updateCouponDto: UpdateCouponDto): Promise<Coupon> {
    await this.findById(id);

    if (updateCouponDto.code) {
      const existingCoupon = await this.couponRepository.findByCode(
        updateCouponDto.code,
      );
      if (existingCoupon && existingCoupon.id !== id) {
        throw new BadRequestException(
          `Cupom com código '${updateCouponDto.code}' já existe`,
        );
      }
    }

    return this.couponRepository.update(id, updateCouponDto);
  }

  async delete(id: number): Promise<Coupon> {
    await this.findById(id);

    return this.couponRepository.delete(id);
  }

  async validateCoupon(
    code: string,
    orderValue: number,
  ): Promise<{ isValid: boolean; message?: string; coupon?: Coupon }> {
    try {
      const coupon = await this.findByCode(code);

      if (!coupon.isActive) {
        return { isValid: false, message: 'Este cupom está inativo' };
      }

      if (
        coupon.expirationDate &&
        new Date(coupon.expirationDate) < new Date()
      ) {
        return { isValid: false, message: 'Este cupom expirou' };
      }

      if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
        return {
          isValid: false,
          message: 'Este cupom atingiu o limite de uso',
        };
      }

      if (coupon.minOrderValue && orderValue < coupon.minOrderValue) {
        return {
          isValid: false,
          message: `O valor mínimo para usar este cupom é R$ ${coupon.minOrderValue.toFixed(2)}`,
        };
      }

      return { isValid: true, coupon };
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      logger.error('Validate failed', error, 'CouponService');
      return { isValid: false, message: 'Cupom inválido' };
    }
  }

  async applyCoupon(couponId: number): Promise<Coupon> {
    return this.couponRepository.incrementUsageCount(couponId);
  }
}
