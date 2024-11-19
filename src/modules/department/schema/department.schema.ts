import { CustomBaseEntity } from 'src/base-classes/base.entity';
import { Teacher } from 'src/modules/teacher/schema/teacher.schema';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity('departments')
export default class Department extends CustomBaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Teacher, (teacher) => teacher.department, { cascade: true })
  teachers: Teacher[];
}
