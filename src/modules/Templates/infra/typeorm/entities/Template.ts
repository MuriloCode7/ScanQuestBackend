import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('template')
export default class Template {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['multiple', 'single', 'subjective', 'true_false'],
    default: 'single',
  })
  question_type: string;

  @Column()
  answer: string;
}
