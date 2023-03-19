import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Employees } from './employees.entity';
import { Jobs } from './jobs.entity';
import { Departments } from './departments.entity';
import { IsNotEmpty, IsString, IsInt, IsDate } from 'class-validator';

@Entity()
export class JobHistory {
  @PrimaryColumn()
  @IsNotEmpty()
  @IsInt()
  employee_id: number;

  @PrimaryColumn()
  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @Column()
  @IsNotEmpty()
  @IsDate()
  end_date: Date;

  @Column({ type: 'varchar', length: 10 })
  @IsNotEmpty()
  @IsString()
  job_id: string;

  @Column({ type: 'int', unsigned: true })
  @IsNotEmpty()
  @IsInt()
  department_id: number;

  @ManyToOne(() => Employees, (employee) => employee.jobHistory)
  @JoinColumn({ name: 'employee_id' })
  employee: Employees;

  @ManyToOne(() => Jobs, (job) => job.jobHistory)
  @JoinColumn({ name: 'job_id' })
  job: Jobs;

  @ManyToOne(() => Departments, (department) => department.jobHistory)
  @JoinColumn({ name: 'department_id' })
  department: Departments;
}
