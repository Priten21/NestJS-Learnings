import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';

import { Role } from '../auth/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // PUBLIC (temporary)
  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  // 🔐 Any logged-in user
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@CurrentUser() user: any) {
    return user;
  }

  // 🔐 ADMIN ONLY (FIRST RBAC ROUTE)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }
}
