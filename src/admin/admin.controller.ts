import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminService } from './admin.service';
import { UpdateAdminDto } from './dto/update-admin.dto';


@Controller('users')
export class AdminController {
  constructor(private readonly usersService: AdminService) {}

  @Post()
  create(@Body() createUserDto: CreateAdminDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateAdminDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
