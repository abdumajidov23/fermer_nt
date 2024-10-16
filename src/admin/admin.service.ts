import { Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "./entities/admin.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(createAdminDto);
  }

  findAll() {
    return this.adminRepository.find();
  }

  findOne(id: number) {
    return this.adminRepository.findOne({ where: { id } }); 
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    await this.adminRepository.update({ id }, updateAdminDto); 
    return this.findOne(id); 
  }

  async remove(id: number) {
    await this.adminRepository.delete({ id }); 
    return id;
  }
}
