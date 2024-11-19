import { Module } from '@nestjs/common';

import User from './schema/user.schema';
import UserService from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
})
export default class UserModule {}
