import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { Product } from './core/domain/product';

@ApiTags('Products')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  async getProducts(): Promise<Product[]> {
    return this.appService.getAllProducts();
  }
}
