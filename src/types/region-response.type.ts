import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class GetRegionResponseType {
  @ApiProperty({ description: '지역 ID' })
  @IsNotEmpty()
  @IsInt()
  region_id: number;

  @ApiProperty({ description: '지역 이름' })
  @IsNotEmpty()
  @IsString()
  region_name: string;
}
