import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Department from './schema/department.schema';
import DepartmentService from './department.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  providers: [DepartmentService],
  exports: [DepartmentService],
})
export default class DepartmentModule {}
