// DTO: Data Transfer Object
import { IsString, IsNumberString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
  @IsNumberString()
  phone: string;
}
