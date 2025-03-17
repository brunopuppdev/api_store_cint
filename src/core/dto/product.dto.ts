import { ApiProperty } from '@nestjs/swagger';

import { CashbackType } from '~/core/enums';

export class ProductDto {
  @ApiProperty({
    type: Number,
    description: 'O id do produto',
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'O nome do produto',
    example: 'Produto 1',
  })
  name: string;

  @ApiProperty({
    type: Number,
    description: 'O preço do produto',
    example: 100,
  })
  price: number;

  @ApiProperty({
    type: String,
    description: 'A descrição do produto',
    example: 'Descrição do produto 1',
    required: false,
  })
  description?: string;

  @ApiProperty({
    type: String,
    description: 'A URL da imagem do produto',
    example: 'https://exemplo.com/imagem.jpg',
  })
  image: string;

  @ApiProperty({
    type: String,
    description: 'A categoria do produto',
    example: 'Eletrônicos',
  })
  category: string;

  @ApiProperty({
    type: Number,
    description: 'A quantidade em estoque',
    example: 50,
    default: 0,
  })
  stock: number;

  @ApiProperty({
    type: String,
    description: 'O status do produto',
    example: 'available',
    default: 'available',
  })
  status: string;

  @ApiProperty({
    enum: CashbackType,
    description: 'O tipo de cashback',
    example: CashbackType.PERCENTAGE,
    default: CashbackType.PERCENTAGE,
  })
  cashbackType: CashbackType;

  @ApiProperty({
    type: Number,
    description: 'O valor do cashback (percentual ou valor fixo)',
    example: 5,
    default: 0,
  })
  cashbackValue: number;

  @ApiProperty({
    type: Number,
    description: 'A quantidade de pontos que o produto concede',
    example: 100,
    default: 0,
  })
  pointsValue: number;

  @ApiProperty({
    type: Date,
    description: 'Data de criação',
    example: new Date().toISOString(),
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: 'Data de atualização',
    example: new Date().toISOString(),
  })
  updatedAt: Date;
}
