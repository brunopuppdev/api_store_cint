import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserCreateDto } from '~/core/dto/user/user-create.dto';
import {
  UserCreateResponseDto,
  UserResponseDto,
} from '~/core/dto/user/user-response.dto';
import { UserService } from '~/core/services/user.service';
import { UserMapper } from '~/infrastructure/mappers/user.mapper';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userMapper: UserMapper,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os produtos',
    description: 'Retorna uma lista com todos os produtos disponíveis',
  })
  @ApiOkResponse({
    description: 'Lista de produtos recuperada com sucesso',
    type: UserResponseDto,
    isArray: true,
  })
  async findAll(): Promise<UserResponseDto[]> {
    return this.userService.findAll();
  }

  @Get('by-email')
  @ApiOperation({
    summary: 'Buscar usuário por email',
    description: 'Recupera um usuário pelo seu email',
  })
  @ApiOkResponse({
    description: 'Usuário encontrado com sucesso',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuário não encontrado',
  })
  async findByEmail(@Query('email') email: string): Promise<UserResponseDto> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar usuário por ID',
    description: 'Recupera um usuário pelo seu ID',
  })
  @ApiOkResponse({
    description: 'Usuário encontrado com sucesso',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuário não encontrado',
  })
  async findById(@Param('id') id: string): Promise<UserResponseDto> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar novo usuário' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Usuário criado com sucesso',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Email já cadastrado',
  })
  async create(
    @Body() createUserDto: UserCreateDto,
  ): Promise<UserCreateResponseDto> {
    return await this.userService.create(createUserDto);
  }
}
