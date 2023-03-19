import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetEmployeeResponseType {
  @ApiProperty({ description: '사원 ID' })
  @IsNotEmpty()
  @IsInt()
  employee_id: number;

  @ApiProperty({ description: '이름' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ description: '성씨' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({ description: '이메일' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: '전화번호' })
  @IsOptional()
  @IsString()
  phone_number: string;

  @ApiProperty({ description: '고용 날짜' })
  @IsNotEmpty()
  @IsDate()
  hire_date: Date;

  @ApiProperty({ description: '직업 ID' })
  @IsNotEmpty()
  @IsString()
  job_id: string;

  @ApiProperty({ description: '연봉' })
  @IsNotEmpty()
  @IsNumber()
  salary: number;

  @ApiProperty({ description: '성과급' })
  @IsOptional()
  @IsNumber()
  commission_pct: number;

  @ApiProperty({ description: '매니저 ID' })
  @IsNotEmpty()
  @IsInt()
  manager_id: number;

  @ApiProperty({ description: '부서 ID' })
  @IsNotEmpty()
  @IsInt()
  department_id: number;
}
