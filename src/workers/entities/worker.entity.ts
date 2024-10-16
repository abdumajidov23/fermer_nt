import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Workers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  phone_number: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_active: boolean;

  @Column({ default: null })
  hashed_refresh_token: string;
}
