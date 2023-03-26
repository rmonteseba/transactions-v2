import { IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  currencyId: string;

  @IsNumber()
  balance: number;

  @IsString()
  userId: string;
}
