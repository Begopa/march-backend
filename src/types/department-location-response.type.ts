import { ApiProperty } from '@nestjs/swagger';
import { GetLocationResponseType } from './location-response.type';

export class GetDepartmentLocationResponseType {
  @ApiProperty({ description: '부서 ID' })
  department_id: number;

  @ApiProperty({ description: '부서 이름' })
  department_name: string;

  @ApiProperty({ description: '위치 정보' })
  location: GetLocationResponseType;
}
