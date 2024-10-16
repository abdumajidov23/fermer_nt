import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  phone_number:string
  
  @Column({unique:true})
  login: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_creator: boolean;

  @Column({default:null})
  hashed_refresh_token:string
}
