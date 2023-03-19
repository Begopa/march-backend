import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { Regions } from './regions.entity';
import { Locations } from './locations.entity';

@Entity()
export class Countries {
  @PrimaryColumn({ type: 'char', length: 2 })
  @IsNotEmpty()
  @IsString()
  country_id: string;

  @Column({ type: 'varchar', length: 40 })
  @IsNotEmpty()
  @IsString()
  country_name: string;

  @Column({ type: 'int', unsigned: true })
  @IsNotEmpty()
  @IsInt()
  region_id: number;

  @ManyToOne(() => Regions, (region) => region.countries)
  @JoinColumn({ name: 'region_id' })
  region: Regions;

  @OneToMany(() => Locations, (location) => location.country)
  locations: Location[];
}
