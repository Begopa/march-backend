import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('public')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('regions')
  findAllRegions() {
    return this.employeesService.findAllRegions();
  }
  @Get('regions/:id')
  findOneRegion(@Param('id') id: number) {
    return this.employeesService.findOne(id);
  }

  @Get('countries')
  findAllCountries() {
    return this.employeesService.findAllCountries();
  }

  @Get('locations')
  findAllLocations() {
    return this.employeesService.findAllLocations();
  }

  @Get('departments')
  findAllDepartments() {
    return this.employeesService.findAllDepartments();
  }

  @Get('jobs')
  findAllJobs() {
    return this.employeesService.findAllJobs();
  }

  @Get('employees')
  findAllEmployees() {
    return this.employeesService.findAllEmployees();
  }

  @Get('jobHistory')
  findAllJobHistory() {
    return this.employeesService.findAllJobHistory();
  }

  @Get('employees/:employee_id')
  getEmployee(@Param('employee_id', ParseIntPipe) employee_id: number) {
    return this.employeesService.findOneEmployee(employee_id);
  }

  @Get('employees/jobHistory/:employee_id')
  getJobHistoryOfEmployee(
    @Param('employee_id', ParseIntPipe) employee_id: number,
  ) {
    return this.employeesService.findJobHistoryOfEmployee(employee_id);
  }

  @Get('departments/:department_id')
  getDepartment(@Param('department_id', ParseIntPipe) department_id: number) {
    return this.employeesService.findDepartmentAndLocation(department_id);
  }

  @Patch('department/:department_id')
  updateDepartmentSalary() {
    return '특정부서 급여를 특정 비율로 인상 및 사원 정보 업데이트';
  }
}
