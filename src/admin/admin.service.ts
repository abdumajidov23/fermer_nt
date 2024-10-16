import { Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "./entities/admin.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepo.save(createAdminDto);
  }

  findAll() {
    return this.adminRepo.find();
  }

  findOne(id: number) {
    return this.adminRepo.findOneBy({ id });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepo.update({ id }, updateAdminDto);
  }

  remove(id: number) {
    return this.adminRepo.delete({ id });
  }
}
