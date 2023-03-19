import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Regions } from '../entities/regions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countries } from '../entities/countries.entity';
import { Locations } from '../entities/locations.entity';
import { Departments } from '../entities/departments.entity';
import { Jobs } from '../entities/jobs.entity';
import { Employees } from '../entities/employees.entity';
import { JobHistory } from '../entities/job-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regions,
      Countries,
      Locations,
      Departments,
      Jobs,
      Employees,
      JobHistory,
    ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
