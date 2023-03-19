import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { Countries } from './countries.entity';

@Entity()
export class Regions {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @IsInt()
  region_id: number;

  @Column({ type: 'varchar', length: 25 })
  @IsNotEmpty()
  @IsString()
  region_name: string;

  @OneToMany(() => Countries, (countries) => countries.region)
  countries: Countries[];
}
