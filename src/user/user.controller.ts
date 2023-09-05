import { Controller, Get, Param } from '@nestjs/common';

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
}
