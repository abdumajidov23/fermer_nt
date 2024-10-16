import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Workers } from './entities/worker.entity';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { WorkerService } from './workers.service';

@Resolver(() => Workers)
export class WorkersResolver {
  constructor(private readonly workerService: WorkerService) {}

  @Mutation(() => Workers)
  createWorker(@Args('createWorker') createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }

  @Query(() => [Workers])
  findAllWorkers() {
    return this.workerService.findAll();
  }

  @Query(() => Workers)
  findOneWorker(@Args('id', { type: () => ID }) id: number) {
    return this.workerService.findOne(id);
  }

  @Mutation(() => Workers)
  updateWorker(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateWorkerDto') updateWorkerDto: UpdateWorkerDto 
  ) {
    return this.workerService.update(id, updateWorkerDto);
  }

  @Mutation(() => ID)
  removeWorker(@Args('id', { type: () => ID }) id: number) {
    return this.workerService.remove(id);
  }
}
