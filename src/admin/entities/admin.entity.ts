import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Admin {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  full_name: string;

  @Field()
  @Column()
  phone_number: string;

  @Field()
  @Column({ unique: true })
  login: string;

  @Field()
  @Column()
  password: string;

  @Column({ default: false })
  is_creator: boolean;

  @Column({ default: null })
  hashed_refresh_token: string;
}
