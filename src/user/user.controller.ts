import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return {
      user: {
        id,
      },
    };
  }

  @Post()
  createUser(@Body() body: any) {
    return body;
  }
}
