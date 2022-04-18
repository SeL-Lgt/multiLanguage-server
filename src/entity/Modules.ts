import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import Base from './Base';

@Entity('i18n_modules')
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
