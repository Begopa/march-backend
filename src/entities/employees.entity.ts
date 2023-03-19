import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Jobs } from './jobs.entity';
import { Departments } from './departments.entity';
import { JobHistory } from './job-history.entity';

@Entity()
export class Employees {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @IsInt()
  employee_id: number;

  @Column({ type: 'varchar', length: 20 })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @Column({ type: 'varchar', length: 25 })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @Column({ type: 'varchar', length: 25 })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  @IsOptional()
  @IsString()
  phone_number: string;

  @Column()
  @IsNotEmpty()
  @IsDate()
  hire_date: Date;

  @Column({ type: 'varchar', length: 10 })
  @IsNotEmpty()
  @IsString()
  job_id: string;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  @IsNotEmpty()
  @IsNumber()
  salary: number;

  @Column({ nullable: true, type: 'decimal', precision: 2, scale: 2 })
  @IsOptional()
  @IsNumber()
  commission_pct: number;

  @Column()
  @IsNotEmpty()
  @IsInt()
  manager_id: number;

  @Column()
  @IsNotEmpty()
  @IsInt()
  department_id: number;

  @ManyToOne(() => Jobs, (job) => job.employees)
  @JoinColumn({ name: 'job_id' })
  job: Jobs;

  @OneToMany(() => Departments, (department) => department.manager)
  managed_departments: Departments[];

  @ManyToOne(() => Departments, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  department: Departments;

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.employee)
  jobHistory: JobHistory;

  @ManyToOne(() => Employees, (manager) => manager.subordinates)
  @JoinColumn({ name: 'manager_id' })
  manager: Employees;

  subordinates: Employees[];
}
