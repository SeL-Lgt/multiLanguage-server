import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import CopyWritingType from '@/type/CopyWritingServices';
import Base from './Base';

@Entity('i18n_copywriting')
export default class CopyWriting extends Base {
  @Column({ select: false })
  @Generated('uuid')
  id: number;

  @PrimaryColumn({ type: 'varchar', length: 200 })
  modulesKey: string;

  @PrimaryColumn({ type: 'varchar', length: 200 })
  subModulesKey: string;

  @PrimaryColumn({ type: 'varchar', length: 255 })
  copyKey: string;

  @PrimaryColumn({ type: 'varchar', length: 50 })
  langKey: string;

  @Column()
  langText: string;

  langList: Array<CopyWritingType.LangList>;
}
