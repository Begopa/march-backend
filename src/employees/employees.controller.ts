import { Controller, Get, Patch } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('public')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('employees/:employee_id')
  getEmployee() {
    return '특정 사원 현재 정보';
  }

  @Get('employees/jobHistory/:employee_id')
  getJobHistoryOfEmployee() {
    return '특정 사원 이력';
  }

  @Get('department/:department_id')
  getDepartment() {
    return '부서 및 위치 정보';
  }

  @Patch('department/:department_id')
  updateDepartmentSalary() {
    return '특정부서 급여를 특정 비율로 인상 및 사원 정보 업데이트';
  }
}
