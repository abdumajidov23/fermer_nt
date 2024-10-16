import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AdminService } from "./admin.service";
import { Admin } from "./entities/admin.entity";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => Admin)
  createAdmin(@Args('createAdminDto') createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Query(() => [Admin], { name: 'admins' })
  async getAllAdmins(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Query(() => Admin)
  findOne(@Args('id') id: number) {
    return this.adminService.findOne(id);
  }

  @Mutation(() => Admin)
  updateAdmin(
    @Args('id') id: number,
    @Args('updateAdminDto') updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.update(id, updateAdminDto);
  }

  @Mutation(() => Number)
  removeAdmin(@Args('id') id: number) {
    return this.adminService.remove(id);
  }
}
