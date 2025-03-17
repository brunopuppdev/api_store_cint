import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { DiscountType } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCouponDto {
  @ApiProperty({ description: 'Código único do cupom' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  code: string;

  @ApiProperty({
    enum: DiscountType,
    description: 'Tipo de desconto (PERCENTAGE ou FIXED_VALUE)',
  })
  @IsEnum(DiscountType)
  discountType: DiscountType;

  @ApiProperty({ description: 'Valor do desconto (percentual ou valor fixo)' })
  @IsNumber()
  @IsPositive()
  discountValue: number;

  @ApiPropertyOptional({
    description: 'Valor mínimo do pedido para aplicar o cupom',
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  minOrderValue?: number;

  @ApiPropertyOptional({ description: 'Valor máximo de desconto permitido' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  maxDiscountAmount?: number;

  @ApiPropertyOptional({ description: 'Data de expiração do cupom' })
  @IsOptional()
  expirationDate?: Date;

  @ApiPropertyOptional({ description: 'Limite de usos do cupom' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  usageLimit?: number;
}
