import { ApiProperty } from '@nestjs/swagger';
import { GetLocationResponseType } from './location-response.type';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class GetDepartmentLocationResponseType {
  @ApiProperty({ description: '부서 ID' })
  @IsNotEmpty()
  @IsInt()
  department_id: number;

  @ApiProperty({ description: '부서 이름' })
  @IsNotEmpty()
  @IsString()
  department_name: string;

  @ApiProperty({ description: '위치 정보' })
  @IsNotEmpty()
  location: GetLocationResponseType;
}
