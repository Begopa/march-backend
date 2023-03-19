import { ApiProperty } from '@nestjs/swagger';
import { GetCountryResponseType } from './country-response.type';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetLocationResponseType {
  @ApiProperty({ description: '위치 정보 ID' })
  @IsNotEmpty()
  @IsInt()
  location_id: number;

  @ApiProperty({ description: '도로명 주소' })
  @IsOptional()
  @IsString()
  street_address: string;

  @ApiProperty({ description: '우편 번호' })
  @IsOptional()
  @IsString()
  postal_code: string;

  @ApiProperty({ description: '도시명' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ description: '행정 구역명' })
  @IsOptional()
  @IsString()
  state_province: string;

  @ApiProperty({ description: '현 위치의 나라 정보' })
  @IsNotEmpty()
  @IsString()
  country: GetCountryResponseType;
}
