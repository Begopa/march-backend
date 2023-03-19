import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetSalaryRequestType {
  @ApiProperty({ description: '부서 ID' })
  @IsNotEmpty()
  department_id: number;

  @ApiProperty({ description: '연봉 인상 비율' })
  percentage: number;
}
