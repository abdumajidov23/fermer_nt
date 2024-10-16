import { InputType, PartialType, Field } from "@nestjs/graphql";
import { CreateAdminDto } from "./create-admin.dto";

@InputType() // Bu joyni qo'shish
export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @Field({ nullable: true }) // Har bir maydonni kerak bo'lsa, nullable qilib qo'ying
  full_name?: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field({ nullable: true })
  login?: string;

  @Field({ nullable: true })
  password?: string;
}
