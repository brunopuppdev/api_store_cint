// user-response.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Exclude, Transform } from 'class-transformer';

export class UserResponseDto {
  @ApiProperty({ description: 'ID do usuário' })
  id: string;

  @ApiProperty({ description: 'Nome completo do usuário' })
  name: string;

  @ApiProperty({ description: 'Email do usuário' })
  email: string;

  @Exclude()
  password: string;

  @ApiProperty({ description: 'Data de criação' })
  @Transform(({ value }) => {
    if (value instanceof Date) {
      return value.toISOString();
    }
    return typeof value === 'string' ? value : String(value);
  })
  createdAt: Date;

  @ApiProperty({ description: 'Data de atualização' })
  @Transform(({ value }) => {
    if (value instanceof Date) {
      return value.toISOString();
    }
    return typeof value === 'string' ? value : String(value);
  })
  updatedAt: Date;

  @ApiProperty({ description: 'Saldo de cashback do usuário' })
  cashbackBalance: number;

  @ApiProperty({ description: 'Saldo de pontos do usuário' })
  pointsBalance: number;

  @ApiPropertyOptional({
    description: 'Pedidos do usuário',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  })
  orders?: any[];

  @ApiPropertyOptional({
    description: 'Recompensas resgatadas pelo usuário',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  })
  userRewards?: any[];

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
