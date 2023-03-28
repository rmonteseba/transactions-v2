import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';

export class CreateTransactionDto {
  @IsUUID()
  source: string;

  @IsUUID()
  destination: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsString()
  @IsOptional()
  description?: string;
}
