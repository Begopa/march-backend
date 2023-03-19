import { ApiProperty } from '@nestjs/swagger';

export class GetRegionResponseType {
  @ApiProperty({ description: 'The ID of the country' })
  region_id: number;

  @ApiProperty({ description: 'The name of the country' })
  region_name: string;
}
