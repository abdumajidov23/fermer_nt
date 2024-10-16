import { Injectable } from "@nestjs/common";
import { CreateWorkerDto } from "./dto/create-worker.dto";
import { UpdateWorkerDto } from "./dto/update-worker.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Workers } from "./entities/worker.entity";
import { Repository } from "typeorm";

@Injectable()
export class WorkersService {
  constructor(
    @InjectRepository(Workers) private readonly workersRepo: Repository<Workers>
  ) {}

  create(createWorkerDto: CreateWorkerDto) {
    return this.workersRepo.save(createWorkerDto);
  }

  findAll() {
    return this.workersRepo.find();
  }

  findOne(id: number) {
    return this.workersRepo.findOneBy({ id });
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workersRepo.update({id}, updateWorkerDto);
  }

  remove(id: number) {
    return this.workersRepo.delete({id});
  }
}
