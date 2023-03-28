import { IsString, IsUUID } from 'class-validator';

export class UserStateDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;
}
