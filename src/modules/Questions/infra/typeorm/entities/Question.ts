import Assessment from '@modules/Assessments/infra/typeorm/entities/Assessment';
import Template from '@modules/Templates/infra/typeorm/entities/Template';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('question')
export default class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  template_id: string;

  @OneToOne(() => Template, { eager: true })
  @JoinColumn({ name: 'template_id' })
  template: Template;

  @Column()
  status: string;

  @Column()
  score: number;

  @Column()
  assessment_id: string;

  @ManyToMany(() => Assessment)
  @JoinTable()
  assessments: Assessment[];
}
