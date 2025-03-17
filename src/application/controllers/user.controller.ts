import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { User } from '~/core/domain/user';
import { UserResponseDto } from '~/core/dto/user.dto';
import { UserService } from '~/core/services/user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @ApiOperation({
    summary: 'Listar todos os produtos',
    description: 'Retorna uma lista com todos os produtos disponíveis',
  })
  @ApiOkResponse({
    description: 'Lista de produtos recuperada com sucesso',
    type: UserResponseDto,
    isArray: true,
  })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
