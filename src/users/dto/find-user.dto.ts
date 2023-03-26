import { IsString } from 'class-validator';

export class FindUserDto {
  @IsString()
  id: string;
}
