import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

@InputType() // Bu joyni qo'shing
export class CreateAdminDto {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber("UZ")
  phone_number: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  login: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password: string;
}
