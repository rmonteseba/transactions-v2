import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateAccountDto {
  @IsUUID()
  currencyId: string;

  @IsNumber()
  balance: number;

  @IsString()
  description?: string;

  @IsUUID()
  userId: string;
}
