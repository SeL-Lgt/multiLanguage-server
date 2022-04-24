import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import Base from './Base';

export type LangList = {
  langKey: string;
  langText: string;
};

@Entity('i18n_copywriting')
export default class CopyWriting extends Base {
  @Column()
  @Generated('uuid')
  id: number;

  @PrimaryColumn({ type: 'varchar', length: 200 })
  modulesKey: string;

  @PrimaryColumn({ type: 'varchar', length: 200 })
  subModulesKey: string;

  @PrimaryColumn({ type: 'varchar', length: 50 })
  langKey: string;

  @PrimaryColumn({ type: 'varchar', length: 255 })
  copyKey: string;

  @Column()
  langText: string;

  langList: Array<LangList>;
}
