import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './infrastructure/config/logger/logger.module';
import { PrismaService } from './infrastructure/services/prisma.service';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';

@Module({
  imports: [LoggerModule, RepositoriesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
