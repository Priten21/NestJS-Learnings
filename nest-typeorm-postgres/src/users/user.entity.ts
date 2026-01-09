import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Profile } from '../profiles/profile.entity';
import { Post } from '../posts/post.entity';
import { Role } from '../roles/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  /* ---------- ONE TO ONE ---------- */
  @OneToOne(() => Profile, profile => profile.user)
  profile: Profile;

  /* ---------- ONE TO MANY ---------- */
  @OneToMany(() => Post, post => post.user)
  posts: Post[];

  /* ---------- MANY TO MANY ---------- */
  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
