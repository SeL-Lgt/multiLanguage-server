import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export default class Base {
  @Column({ default: 'admin' })
  createUser: string;

  @CreateDateColumn()
  createDate: Date;

  @Column({ default: 'admin' })
  updateUser: string;

  @UpdateDateColumn()
  updateDate: Date;

  /**
   * 逻辑删除
   * 0：未删除
   * 1：已删除
   */
  @Column({ default: 0 })
  deleteFlag: boolean;
}
