import { IsUUID } from 'class-validator';

export class LoginUserDto {
  @IsUUID()
  id: string;
}
