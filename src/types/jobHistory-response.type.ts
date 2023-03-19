import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class GetJobHistoryResponseType {
  @ApiProperty({ description: '사원 ID' })
  @IsNotEmpty()
  @IsInt()
  employee_id: number;

  @ApiProperty({ description: '고용 날짜' })
  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @ApiProperty({ description: '퇴직 날짜' })
  @IsNotEmpty()
  @IsDate()
  end_date: Date;

  @ApiProperty({ description: '직업 ID' })
  @IsNotEmpty()
  @IsString()
  job_id: string;

  @ApiProperty({ description: '부서 ID' })
  @IsNotEmpty()
  @IsInt()
  department_id: number;
}
