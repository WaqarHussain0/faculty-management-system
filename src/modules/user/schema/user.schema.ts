import { CustomBaseEntity } from 'src/base-classes/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('users')
export default class User extends CustomBaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  contactNo: string;

  @Column({ default: false })
  isAdmin: boolean; // Identifies whether a user is an admin
}
