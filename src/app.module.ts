import { Module } from '@nestjs/common';

import { CouponModule } from '~/application/modules/coupon.module';
import { ProductModule } from '~/application/modules/product.module';
import { UserModule } from '~/application/modules/user.module';

import { LoggerModule } from './infrastructure/config/logger/logger.module';
import { PrismaModule } from './infrastructure/services/prisma.module';

@Module({
  imports: [
    LoggerModule,
    PrismaModule,
    ProductModule,
    UserModule,
    CouponModule,
  ],
})
export class AppModule {}
