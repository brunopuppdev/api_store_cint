import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FindAllProductsUseCase } from '../../application/use-cases/find-all-products.use-case';
import { Product } from '../../core/domain/product';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List all products' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: [Product],
  })
  async findAll(): Promise<Product[]> {
    return this.findAllProductsUseCase.execute();
  }
}
