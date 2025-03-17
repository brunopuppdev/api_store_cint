import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserResponseDto {
  @ApiProperty({ description: 'ID do usuário' })
  id: string;

  @ApiProperty({ description: 'Nome completo do usuário' })
  name: string;

  @ApiProperty({ description: 'Email do usuário' })
  email: string;

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

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}

export class UserCreateResponseDto {
  @ApiProperty({ description: 'ID do usuário' })
  id: string;

  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
  })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsString({ message: 'O nome deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao@exemplo.com',
  })
  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  email: string;

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

  constructor(partial: Partial<UserCreateResponseDto>) {
    Object.assign(this, partial);
  }
}
