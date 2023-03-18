import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('public')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('employees/:employee_id')
  getEmployee(@Param('employee_id', ParseIntPipe) employee_id: number) {
    throw new HttpException('api is broken', 401);
    return '특정 사원 현재 정보';
  }

  @Get('employees/jobHistory/:employee_id')
  getJobHistoryOfEmployee(
    @Param('employee_id', ParseIntPipe) employee_id: number,
  ) {
    return '특정 사원 이력';
  }

  @Get('department/:department_id')
  getDepartment(@Param('department_id', ParseIntPipe) department_id: number) {
    return '부서 및 위치 정보';
  }

  @Patch('department/:department_id')
  updateDepartmentSalary() {
    return '특정부서 급여를 특정 비율로 인상 및 사원 정보 업데이트';
  }
}
