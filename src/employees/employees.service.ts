import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regions } from '../entities/regions.entity';
import { Repository } from 'typeorm';
import { Countries } from '../entities/countries.entity';
import { Locations } from '../entities/locations.entity';
import { Departments } from '../entities/departments.entity';
import { Jobs } from '../entities/jobs.entity';
import { JobHistory } from '../entities/job-history.entity';
import { Employees } from '../entities/employees.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Regions)
    private regionsRepository: Repository<Regions>,
    @InjectRepository(Countries)
    private countriesRepository: Repository<Countries>,

    @InjectRepository(Locations)
    private locationsRepository: Repository<Locations>,
    @InjectRepository(Departments)
    private departmentsRepository: Repository<Departments>,
    @InjectRepository(Jobs)
    private jobsRepository: Repository<Jobs>,
    @InjectRepository(Employees)
    private employeesRepository: Repository<Employees>,
    @InjectRepository(JobHistory)
    private jobHistoryRepository: Repository<JobHistory>,
  ) {}

  findAllRegions(): Promise<Regions[]> {
    return this.regionsRepository.find();
  }

  async findAllCountries(): Promise<Countries[]> {
    return await this.countriesRepository.find();
  }

  async findAllLocations(): Promise<Locations[]> {
    return await this.locationsRepository.find();
  }

  async findAllDepartments(): Promise<Departments[]> {
    return await this.departmentsRepository.find();
  }
  async findAllJobs(): Promise<Jobs[]> {
    return await this.jobsRepository.find();
  }
  async findAllEmployees(): Promise<Employees[]> {
    return await this.employeesRepository.find();
  }
  async findAllJobHistory(): Promise<JobHistory[]> {
    return await this.jobHistoryRepository.find();
  }

  findOne(id: number): Promise<Regions> {
    return this.regionsRepository.findOneBy({ region_id: id });
  }
}
