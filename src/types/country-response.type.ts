import { ApiProperty } from '@nestjs/swagger';
import { GetRegionResponseType } from './region-response.type';

export class GetCountryResponseType {
  @ApiProperty({ description: '나라 ID' })
  country_id: string;

  @ApiProperty({ description: '나라 이름' })
  country_name: string;

  @ApiProperty({ description: '지역 정보' })
  region: GetRegionResponseType;
}
