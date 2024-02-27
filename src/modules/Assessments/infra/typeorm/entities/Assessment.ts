import Question from '@modules/Questions/infra/typeorm/entities/Question';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('assessment')
export default class Assessment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  score: number;

  @Column({ type: 'enum', enum: ['todo', 'doing', 'done'], default: 'todo' })
  status: string;

  @Column()
  progress: number;

  @ManyToMany(() => Question)
  @JoinColumn()
  questions: Question[];
}
