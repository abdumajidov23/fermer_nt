import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Workers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_active: boolean;

  @Column({ default: null })
  hashed_refresh_token: string;
}
