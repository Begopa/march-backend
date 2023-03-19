import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regions } from '../entities/regions.entity';
import { Repository } from 'typeorm';
import { Countries } from '../entities/countries.entity';
import { Locations } from '../entities/locations.entity';
import { Departments } from '../entities/departments.entity';
import { JobHistory } from '../entities/job-history.entity';
import { Employees } from '../entities/employees.entity';
import { GetDepartmentLocationResponseType } from '../types/department-location-response.type';
import { GetEmployeeResponseType } from '../types/employee-response.type';
import { GetJobHistoryResponseType } from '../types/jobHistory-response.type';
import { GetSalaryRequestType } from '../types/salary-request.type';

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
    @InjectRepository(Employees)
    private employeesRepository: Repository<Employees>,
    @InjectRepository(JobHistory)
    private jobHistoryRepository: Repository<JobHistory>,
  ) {}

  /**
   * 사원 조회
   * @param id
   */
  async findOneEmployee(id: number): Promise<GetEmployeeResponseType> {
    const employee = await this.employeesRepository.findOneBy({
      employee_id: id,
    });

    if (!employee) {
      throw new HttpException('employee not found', 404);
    }
    return employee;
  }

  /**
   * 사원 이력 조회
   * @param id
   */
  async findJobHistoryOfEmployee(
    id: number,
  ): Promise<GetJobHistoryResponseType[]> {
    const employee = await this.employeesRepository.findOneBy({
      employee_id: id,
    });
    if (!employee) {
      throw new HttpException('employee not found', 404);
    }
    return await this.jobHistoryRepository.find({
      where: { employee_id: id },
      relations: ['department', 'job'],
    });
  }

  /**
   * 부서 위치 조회
   * @param id
   */
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

  /**
   * 부서 연봉 인상
   * @param data
   */
  async updateSalaryForDepartment(data: GetSalaryRequestType) {
    const department_id = data.department_id;
    const percentage = data.percentage;

    const employees = await this.employeesRepository.find({
      where: { department_id: department_id },
    });

    // 부서 내 직원 연봉 인상 후 저장
    for (const employee of employees) {
      employee.salary *= 1 + percentage / 100;
      await this.employeesRepository.save(employee);
    }

    return employees;
  }
}
