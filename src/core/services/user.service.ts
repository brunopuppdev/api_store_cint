import { ConflictException, Inject, Injectable } from '@nestjs/common';

import { TOKENS } from '~/core/constants/injection-tokens';
import { User, UserCreated } from '~/core/domain/user';
import { UserCreateDto } from '~/core/dto/user/user-create.dto';
import { UserResponseDto } from '~/core/dto/user/user-response.dto';
import { UserRepositoryPort } from '~/core/ports/out/user-repository.port';
import { UserMapper } from '~/infrastructure/mappers/user.mapper';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(TOKENS.REPOSITORIES.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryPort,
    private readonly userMapper: UserMapper,
  ) {}

  async create(createUserDto: UserCreateDto): Promise<UserCreated> {
    const existingUser = await this.userRepository.findByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new ConflictException('Email já cadastrado');
    }

    const hashedPassword = await hash(createUserDto.password, 10);

    const user = new User({
      ...createUserDto,
      password: hashedPassword,
    });
    const userCreated = await this.userRepository.create(user);

    return this.userMapper.toCreateDto(userCreated);
  }

  async findById(id: string): Promise<UserResponseDto | null> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;
    return this.userMapper.toDto(user);
  }

  async findByEmail(email: string): Promise<UserResponseDto | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return null;
    return this.userMapper.toDto(user);
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.findAll();
    return users.map((user) => this.userMapper.toDto(user));
  }
}
