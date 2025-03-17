import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { Product } from '~/core/domain/product';
import { ProductResponseDto } from '~/core/dto/product/product-response.dto';
import { ProductService } from '~/core/services/product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os produtos',
    description: 'Retorna uma lista com todos os produtos disponíveis',
  })
  @ApiOkResponse({
    description: 'Lista de produtos recuperada com sucesso',
    type: ProductResponseDto,
    isArray: true,
  })
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
