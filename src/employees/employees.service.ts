import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regions } from '../entities/regions.entity';
import { Repository } from 'typeorm';
import { Countries } from '../entities/countries.entity';
import { Locations } from '../entities/locations.entity';
import { Departments } from '../entities/departments.entity';
import { Jobs } from '../entities/jobs.entity';
import { JobHistory } from '../entities/job-history.entity';
import { Employees } from '../entities/employees.entity';
import { GetDepartmentLocationResponseType } from '../types/department-location-response.type';

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

  async findOneEmployee(id: number): Promise<Employees> {
    return await this.employeesRepository.findOneBy({ employee_id: id });
  }
  async findJobHistoryOfEmployee(id: number): Promise<JobHistory[]> {
    return await this.jobHistoryRepository.find({
      where: { employee_id: id },
      relations: ['department', 'job'],
    });
  }
  async findDepartmentAndLocation(
    id: number,
  ): Promise<GetDepartmentLocationResponseType> {
    const department = await this.departmentsRepository.findOne({
      where: { department_id: id },
      relations: ['location'],
    });

    if (!department) {
      throw new HttpException('Department not found', 404);
    }

    const location = await this.locationsRepository.findOne({
      where: { location_id: department.location_id },
      relations: ['country'],
    });

    if (!location) {
      throw new HttpException('Location not found', 404);
    }

    const country = await this.countriesRepository.findOne({
      where: { country_id: location.country_id },
      relations: ['region'],
    });

    if (!country) {
      throw new HttpException('Country not found', 404);
    }

    return {
      department_id: department.department_id,
      department_name: department.department_name,
      location: {
        location_id: location.location_id,
        street_address: location.street_address,
        postal_code: location.postal_code,
        city: location.city,
        state_province: location.state_province,
        country: {
          country_id: country.country_id,
          country_name: country.country_name,
          region: {
            region_id: country.region.region_id,
            region_name: country.region.region_name,
          },
        },
      },
    };
  }
  findOne(id: number): Promise<Regions> {
    return this.regionsRepository.findOneBy({ region_id: id });
  }
}
