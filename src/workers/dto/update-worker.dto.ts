import { InputType, Field, PartialType } from "@nestjs/graphql";
import { CreateWorkerDto } from "./create-worker.dto";

@InputType()
export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  is_active?: boolean;
}
