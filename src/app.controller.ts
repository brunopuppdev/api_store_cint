import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './core/domain/product';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  async getProducts(): Promise<Product[]> {
    return this.appService.getAllProducts();
  }
}
