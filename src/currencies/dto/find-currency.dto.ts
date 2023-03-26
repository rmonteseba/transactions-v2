import { IsUUID } from 'class-validator';

export class FindCurrencyDto {
  @IsUUID()
  id: string;
}
