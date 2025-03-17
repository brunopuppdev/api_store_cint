import { Module, Type } from '@nestjs/common';

import { CouponController } from '~/application/controllers/coupon.controller';
import { TOKENS } from '~/core/constants/injection-tokens';
import { CouponRepositoryPort } from '~/core/ports/out/coupon-repository.port';
import { CouponService } from '~/core/services/coupon.service';
import { CouponRepository } from '~/infrastructure/repositories/coupon.repository';
import { PrismaModule } from '~/infrastructure/services/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CouponController],
  providers: [
    CouponService,
    CouponRepository,
    {
      provide: TOKENS.REPOSITORIES.COUPON_REPOSITORY,
      useClass: CouponRepository as Type<CouponRepositoryPort>,
    },
  ],
  exports: [CouponService],
})
export class CouponModule {}
