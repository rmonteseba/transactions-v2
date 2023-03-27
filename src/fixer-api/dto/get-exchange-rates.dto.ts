import { IsArray, IsString } from 'class-validator';

export class GetExchangeRatesDto {
  @IsString()
  base: string;
  @IsArray()
  currencies: string[];
}
