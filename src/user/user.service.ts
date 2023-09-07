// nest g s user --no-spec
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  findOne(id: string) {
    return {
      id,
    };
  }
  createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
