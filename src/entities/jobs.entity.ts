import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString, IsDecimal } from 'class-validator';
import { Employees } from './employees.entity';
import { JobHistory } from './job-history.entity';

@Entity()
export class Jobs {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  @IsNotEmpty()
  @IsString()
  job_id: string;

  @Column({ type: 'varchar', length: 35 })
  @IsNotEmpty()
  @IsString()
  job_title: string;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 0,
    unsigned: true,
    nullable: true,
  })
  @IsDecimal()
  min_salary: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 0,
    unsigned: true,
    nullable: true,
  })
  @IsDecimal()
  max_salary: number;

  @OneToMany(() => Employees, (employee) => employee.job)
  employees: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job)
  jobHistory: JobHistory;
}
