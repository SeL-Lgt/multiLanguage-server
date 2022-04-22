import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Base from './Base';

@Entity('i18n_mark')
export default class Mark extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  langKey: string;

  @Column()
  langText: string;

  @Column({ nullable: true })
  remark: string;

  /**
   * 是否已使用
   */
  @Column({ default: 0 })
  isUsed: boolean;
}
