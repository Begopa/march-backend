import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesService } from './services/employees.service';
import { Regions } from '../entities/regions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countries } from '../entities/countries.entity';
import { Locations } from '../entities/locations.entity';
import { Departments } from '../entities/departments.entity';
import { Jobs } from '../entities/jobs.entity';
import { Employees } from '../entities/employees.entity';
import { JobHistory } from '../entities/job-history.entity';
import { AirDataService } from './services/air-data.service';

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
  providers: [EmployeesService, AirDataService],
})
export class EmployeesModule {}
