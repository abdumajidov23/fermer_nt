import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';  
import { UpdateWorkerDto } from './dto/update-worker.dto';  
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workers } from './entities/worker.entity';  

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(Workers)
    private readonly workerRepository: Repository<Workers>,  
  ) { }

  create(createWorkerDto: CreateWorkerDto) {
    return this.workerRepository.save(createWorkerDto);  
  }

  findAll() {
    return this.workerRepository.find();  
  }

  findOne(id: number) {
    return this.workerRepository.findOne({ where: { id } });  
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    await this.workerRepository.update({ id }, updateWorkerDto);  
    return this.findOne(id);  
  }

  async remove(id: number) {
    await this.workerRepository.delete({ id });  
    return id;  
  }
}
