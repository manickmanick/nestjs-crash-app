// nest g co <name> --no-spec
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
  @Get('all/:id')
  getAll(@Param('id') id) {
    return {
      id,
    };
  }
  // @Get('all/:id')
  // findAll(@Param('id') id: string) {
  //   return {
  //     user: {
  //       id,
  //     },
  //   };
  // }
  @Post()
  create(@Body('name') name: string) {
    return name;
  }
  // @Post()
  // createUser(@Body() createUserDto: CreateUserDto) {
  //   return createUserDto;
  // }
}
