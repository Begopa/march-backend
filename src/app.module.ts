import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { Regions } from './entities/regions.entity';
import { Countries } from './entities/countries.entity';
import { Locations } from './entities/locations.entity';
import { Departments } from './entities/departments.entity';
import { Jobs } from './entities/jobs.entity';
import { Employees } from './entities/employees.entity';
import { JobHistory } from './entities/job-history.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: 3306,
      database: 'hr',
      entities: [
        Regions,
        Countries,
        Locations,
        Departments,
        Jobs,
        Employees,
        JobHistory,
      ],
      synchronize: false,
      logging: true,
    }),
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
