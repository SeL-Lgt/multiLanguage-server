import { Column, Entity, Generated, OneToMany, PrimaryColumn } from 'typeorm';
import SubModules from '@/entity/SubModules';
import Base from './Base';

@Entity('i18n_modules')
export default class Modules extends Base {
  @Column()
  @Generated('uuid')
  id: number;

  @PrimaryColumn({ type: 'varchar', length: 200 })
  modulesKey: string;

  @Column()
  modulesName: string;

  @Column()
  remark: string;

  @OneToMany(() => SubModules, (subModules) => subModules.modules)
  subModules: SubModules[];
}
