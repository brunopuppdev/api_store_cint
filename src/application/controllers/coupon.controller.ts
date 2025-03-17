import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateCouponDto } from '~/core/dto/coupon/create-coupon.dto';
import { UpdateCouponDto } from '~/core/dto/coupon/update-coupon.dto';
import { CouponService } from '~/core/services/coupon.service';

@ApiTags('cupons')
@Controller('coupons')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo cupom' })
  @ApiResponse({ status: 201, description: 'Cupom criado com sucesso' })
  create(@Body() createCouponDto: CreateCouponDto) {
    return this.couponService.create(createCouponDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cupons' })
  findAll() {
    return this.couponService.findAll();
  }
  @Get('/validate')
  @ApiOperation({ summary: 'Validar cupom para um valor de pedido' })
  validateCoupon(
    @Query('code') code: string,
    @Query('orderValue') orderValue: number,
  ) {
    return this.couponService.validateCoupon(code, orderValue);
  }

  @Get('/code/:code')
  @ApiOperation({ summary: 'Buscar cupom por código' })
  findByCode(@Param('code') code: string) {
    return this.couponService.findByCode(code);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cupom por ID' })
  findOne(@Param('id') id: string) {
    return this.couponService.findById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cupom' })
  update(@Param('id') id: string, @Body() updateCouponDto: UpdateCouponDto) {
    return this.couponService.update(+id, updateCouponDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover cupom' })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.couponService.delete(+id);
  }
}
