import { IsString } from 'class-validator';

export class FindAccountDto {
  @IsString()
  id: string;
}
