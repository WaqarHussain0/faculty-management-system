import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import User from 'src/modules/user/schema/user.schema';
import Department from 'src/modules/department/schema/department.schema';
import { CustomBaseEntity } from 'src/base-classes/base.entity';

@Entity('teachers')
export class Teacher extends CustomBaseEntity {
  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  age: number;

  @Column({ unique: true })
  cnic: string;

  @ManyToOne(() => Department, (department) => department.teachers, { eager: true, nullable: false })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column({ type: 'date' })
  dateOfJoining: Date;

  @Column()
  latestAcademicDegree: string;

  @Column('text', { array: true })
  expertise: string[];

  @Column({ default: true })
  isActive: boolean;
}
