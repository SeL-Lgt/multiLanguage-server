import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';
import Base from './Base';

export default class Modules extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  modulesKey: string;

  @Column()
  modulesName: string;

  @Column()
  remark: string;
}
