import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { WorkersModule } from './workers/workers.module';
import { Workers } from './workers/entities/worker.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQl_HOST,
      port: +process.env.MYSQl_PORT,
      username: process.env.MYSQl_USER,
      password: process.env.MYSQl_PASSWORD,
      database: process.env.MYSQl_DB,
      entities:[Admin, Workers, Role],
      synchronize:true
    }),
    AdminModule,
    WorkersModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
