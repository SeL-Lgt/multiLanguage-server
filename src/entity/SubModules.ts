import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import Modules from '@/entity/Modules';
import Base from './Base';

@Entity('i18n_submodules')
export default class SubModules extends Base {
  @Column()
  @Generated('uuid')
  id: number;

  @PrimaryColumn({ type: 'varchar', length: 200 })
  modulesKey: string;

  @PrimaryColumn({ type: 'varchar', length: 200 })
  subModulesKey: string;

  @ManyToOne(() => Modules)
  @JoinColumn({
    name: 'modules_key',
  })
  modules: Modules;
}
