import { IsString } from 'class-validator';

export class FindCurrencyDto {
  @IsString()
  id: string;
}
