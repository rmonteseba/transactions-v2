import { IsString } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  name: string;

  @IsString()
  code: string;
}
