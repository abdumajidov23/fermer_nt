import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

@InputType() // GraphQL uchun InputType sifatida belgilash
export class CreateWorkerDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber("UZ")
  phone: string;

  @Field()
  @IsEmail()
  @IsNotEmpty() // Email ham bo'sh bo'lmasligi kerak
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password: string;
}
