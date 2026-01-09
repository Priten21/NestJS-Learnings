import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Profile } from '../profiles/profile.entity';
import { Role } from '../roles/role.entity';
import { Post } from '../posts/post.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Profile)
    private readonly profileRepo: Repository<Profile>,

    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,

    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
  ) {}

  /* ---------- CREATE USER ---------- */
  async createUser(name: string, email: string, password: string) {
    const user = this.userRepo.create({ name, email, password });
    return this.userRepo.save(user);
  }

  /* ---------- ONE TO ONE USE CASE ---------- */
  async getUserWithProfile(userId: number) {
    return this.userRepo.findOne({
      where: { id: userId },
      relations: ['profile'],
    });
  }

  /* ---------- MANY TO MANY USE CASE ---------- */
  async getAllUsersWithRoles() {
    return this.userRepo.find({
      relations: ['roles'],
    });
  }

  /* ---------- ONE TO MANY USE CASE ---------- */
  async getUserWithPosts(userId: number) {
    return this.userRepo.findOne({
      where: { id: userId },
      relations: ['posts'],
    });
  }

  /* ---------- COMBINED REAL-WORLD USE CASE ---------- */
  async getUserCompleteProfile(userId: number) {
    return this.userRepo.findOne({
      where: { id: userId },
      relations: ['profile', 'roles', 'posts'],
    });
  }
}
