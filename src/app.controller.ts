import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ProductDto } from '~/core/dto/product.dto';

import { AppService } from './app.service';
import { Product } from './core/domain/product';

@ApiTags('Products')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  @ApiOperation({
    summary: 'Listar todos os produtos',
    description: 'Retorna uma lista com todos os produtos disponíveis',
  })
  @ApiOkResponse({
    description: 'Lista de produtos recuperada com sucesso',
    type: ProductDto,
    isArray: true,
  })
  async getProducts(): Promise<Product[]> {
    return this.appService.getAllProducts();
  }
}
