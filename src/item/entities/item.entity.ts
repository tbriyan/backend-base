import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  codigo: string;

  @Column('text', { nullable: true })
  description?: string;

  @Column('decimal', { default: 0 })
  precio: number;

  @Column('integer', { default: 0 })
  cantidad: number;

  @Column({ default: true })
  disponible: boolean;
}
