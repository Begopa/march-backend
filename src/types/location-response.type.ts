import { ApiProperty } from '@nestjs/swagger';
import { GetCountryResponseType } from './country-response.type';

export class GetLocationResponseType {
  @ApiProperty({ description: '위치 정보 ID' })
  location_id: number;

  @ApiProperty({ description: '도로명 주소' })
  street_address: string;

  @ApiProperty({ description: '우편 번호' })
  postal_code: string;

  @ApiProperty({ description: '도시명' })
  city: string;

  @ApiProperty({ description: '행정 구역명' })
  state_province: string;

  @ApiProperty({ description: '현 위치의 나라 정보' })
  country: GetCountryResponseType;
}
