import { ApiProperty } from '@nestjs/swagger';
import { GetRegionResponseType } from './region-response.type';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCountryResponseType {
  @ApiProperty({ description: '나라 ID' })
  @IsNotEmpty()
  @IsString()
  country_id: string;

  @ApiProperty({ description: '나라 이름' })
  @IsNotEmpty()
  @IsString()
  country_name: string;

  @ApiProperty({ description: '지역 정보' })
  @IsNotEmpty()
  region: GetRegionResponseType;
}
