import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';
import { Countries } from './countries.entity';

@Entity()
export class Locations {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @IsInt()
  location_id: number;

  @Column({ type: 'varchar', length: 40, nullable: true })
  @IsOptional()
  @IsString()
  street_address: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  @IsOptional()
  @IsString()
  postal_code: string;

  @Column({ type: 'varchar', length: 30 })
  @IsNotEmpty()
  @IsString()
  city: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  @IsOptional()
  @IsString()
  state_province: string;

  @Column({ type: 'char', length: 2 })
  @IsNotEmpty()
  @IsString()
  country_id: string;

  @ManyToOne(() => Countries, (country) => country.locations)
  @JoinColumn({ name: 'country_id' })
  country: Countries;
}
