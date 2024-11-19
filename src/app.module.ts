import { Module } from '@nestjs/common';
import UserModule from './modules/user/user.module';
import TeacherModule from './modules/teacher/teacher.module';
import DepartmentModule from './modules/department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './configs/index';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
      load: [appConfig],}),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          ...configService.get('database'),
        };
      },
    }),

    UserModule,
    TeacherModule,
    DepartmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
