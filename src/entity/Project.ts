import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';
import Base from './Base';

export default class Project extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  projectKey: string;

  @Column()
  projectName: string;

  @Column()
  mark: string;
}
