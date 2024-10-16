import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./entities/role.entity";
import { Repository } from "typeorm";

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRespository: Repository<Role>
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return this.roleRespository.save(createRoleDto);
  }

  findAll() {
    return this.roleRespository.find();
  }

  findOne(id: number) {
    return this.roleRespository.findOneBy({ id });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRespository.update({ id }, updateRoleDto);
  }

  remove(id: number) {
    return this.roleRespository.delete({ id });
  }
}
