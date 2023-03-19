import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';
import { Employees } from './employees.entity';
import { Locations } from './locations.entity';
import { JobHistory } from './job-history.entity';

@Entity()
export class Departments {
  @PrimaryColumn({ type: 'int', unsigned: true })
  @IsNotEmpty()
  @IsInt()
  department_id: number;

  @Column({ type: 'varchar', length: 30 })
  @IsNotEmpty()
  @IsString()
  department_name: string;

  @Column({ type: 'int', unsigned: true, nullable: true })
  @IsOptional()
  @IsInt()
  manager_id: number;

  @Column({ type: 'int', unsigned: true, nullable: true })
  @IsOptional()
  @IsInt()
  location_id: number;

  @ManyToOne(() => Employees, (employee) => employee.managed_departments, {
    nullable: true,
  })
  @JoinColumn({ name: 'manager_id' })
  manager: Employees;

  @ManyToOne(() => Locations, { nullable: true })
  @JoinColumn({ name: 'location_id' })
  location: Locations;

  @OneToMany(() => Employees, (employee) => employee.department)
  employees: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department)
  jobHistory: JobHistory;
}
