import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class getAirStationsResponseType {
  @ApiProperty({ description: '측정 주소' })
  @IsNotEmpty()
  @IsInt()
  addr: string;

  @ApiProperty({ description: '측정소 위치' })
  @IsNotEmpty()
  @IsString()
  stationName: string;
}
