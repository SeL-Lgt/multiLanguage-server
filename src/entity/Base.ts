import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export default class Base {
  @Column({ default: 'admin', select: false })
  createUser: string;

  @CreateDateColumn({ select: false })
  createDate: Date;

  @Column({ default: 'admin', select: false })
  updateUser: string;

  @UpdateDateColumn({ select: false })
  updateDate: Date;

  /**
   * 逻辑删除
   * 0：未删除
   * 1：已删除
   */
  @Column({ default: 0, select: false })
  deleteFlag: boolean;
}
