import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @UpdateDateColumn({ nullable: true })
  update_at?: Date;

  @CreateDateColumn({ nullable: true })
  created_at?: Date;
}
