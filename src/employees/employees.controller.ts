import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetDepartmentLocationResponseType } from '../types/department-location-response.type';
import { GetEmployeeResponseType } from '../types/employee-response.type';
import { GetJobHistoryResponseType } from '../types/jobHistory-response.type';
import { GetSalaryRequestType } from '../types/salary-request.type';

@Controller('public')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @ApiResponse({
    status: 200,
    description: '특정 사원 정보 조회 성공',
    type: GetEmployeeResponseType,
  })
  @ApiOperation({ summary: '특정 사원 정보 조회' })
  @Get('employees/:employee_id')
  getEmployee(@Param('employee_id', ParseIntPipe) employee_id: number) {
    return this.employeesService.findOneEmployee(employee_id);
  }

  @ApiResponse({
    status: 200,
    description: '특정 사원 이력 조회 성공',
    type: GetJobHistoryResponseType,
  })
  @ApiOperation({ summary: '특정 사원 이력 조회' })
  @Get('employees/jobHistory/:employee_id')
  getJobHistoryOfEmployee(
    @Param('employee_id', ParseIntPipe) employee_id: number,
  ) {
    return this.employeesService.findJobHistoryOfEmployee(employee_id);
  }

  @ApiResponse({
    status: 200,
    description: '부서 및 위치정보 조회 성공',
    type: GetDepartmentLocationResponseType,
  })
  @ApiOperation({ summary: '부서 및 위치정보 조회' })
  @Get('departments/:department_id')
  getDepartment(@Param('department_id', ParseIntPipe) department_id: number) {
    return this.employeesService.findDepartmentAndLocation(department_id);
  }

  @ApiResponse({
    status: 200,
    description: '특정부서 급여 인상 저장 성공',
  })
  @ApiOperation({ summary: '특정부서 급여 인상' })
  @Post('department/salary')
  updateDepartmentSalary(@Body() data: GetSalaryRequestType) {
    return this.employeesService.updateSalaryForDepartment(data);
  }
}
