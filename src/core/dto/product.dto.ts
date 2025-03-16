import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    type: Number,
    description: 'The id of the product',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'The name of the product',
    example: 'Product 1',
  })
  name: string;

  @ApiProperty({
    type: Number,
    description: 'The price of the product',
    example: 100,
  })
  price: number;

  @ApiProperty({
    type: String,
    description: 'The description of the product',
    example: 'Product 1 description',
  })
  description: string;

  @ApiProperty({
    type: String,
    description: 'The image of the product',
    example: 'Product 1 image',
  })
  image: string;

  @ApiProperty({
    type: String,
    description: 'The category of the product',
    example: 'Product 1 category',
  })
  category: string;

  @ApiProperty({
    type: Number,
    description: 'The stock of the product',
    example: 100,
  })
  stock: number;

  @ApiProperty({
    type: String,
    description: 'The status of the product',
    example: 'Product 1 status',
  })
  status: string;

  @ApiProperty({
    type: String,
    description: 'The status of the product',
    example: 'Product 1 status',
  })
  createdAt: Date;

  @ApiProperty({
    type: String,
    description: 'The status of the product',
    example: 'Product 1 status',
  })
  updatedAt: Date;
}
