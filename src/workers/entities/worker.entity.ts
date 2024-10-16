import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType() // GraphQL uchun bu joyni qo'shamiz
@Entity()
export class Workers {
  @Field(() => ID) // ID maydonini GraphQL uchun aniqlash
  @PrimaryGeneratedColumn()
  id: number;

  @Field() 
  @Column()
  name: string;

  @Field() 
  @Column()
  phone: string;

  @Field() 
  @Column({ unique: true })
  email: string;

  @Field() 
  @Column()
  password: string;

  @Field() 
  @Column({ default: false })
  is_active: boolean;

  @Field({ nullable: true }) 
  @Column({ default: null })
  hashed_refresh_token: string;
}
