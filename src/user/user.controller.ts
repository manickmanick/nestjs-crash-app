// nest g co <name> --no-spec
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all/:id')
  getAll(@Param('id') id) {
    return {
      id,
    };
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    var obj: any = this.userService.findOne(id);
    obj.success = 'this is valid';
    return obj;
  }
}
