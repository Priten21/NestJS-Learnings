import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Profile } from '../profiles/profile.entity';
import { Role } from '../roles/role.entity';
import { Post } from '../posts/post.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, Role, Post]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
