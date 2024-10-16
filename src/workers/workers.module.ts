import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workers } from './entities/worker.entity';
import { WorkerService } from './workers.service';
import { WorkersResolver } from './workers.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Workers])],
  controllers: [WorkersController],
  providers: [WorkerService ,WorkersResolver],
})
export class WorkersModule {}
  