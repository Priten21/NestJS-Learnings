import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() body) {
    return this.usersService.createUser(
      body.name,
      body.email,
      body.password,
    );
  }

  /* ---------- ONE TO ONE ---------- */
  @Get(':id/profile')
  getProfile(@Param('id') id: string) {
    return this.usersService.getUserWithProfile(+id);
  }

  /* ---------- MANY TO MANY ---------- */
  @Get('admin/roles')
  getUsersWithRoles() {
    return this.usersService.getAllUsersWithRoles();
  }

  /* ---------- ONE TO MANY ---------- */
  @Get(':id/posts')
  getUserPosts(@Param('id') id: string) {
    return this.usersService.getUserWithPosts(+id);
  }

  /* ---------- FULL REAL-WORLD API ---------- */
  @Get(':id/full')
  getCompleteUser(@Param('id') id: string) {
    return this.usersService.getUserCompleteProfile(+id);
  }
}
