import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserRepository } from './users.repository';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
  exports: [UserRepository],
})
export class UsersModule {}
