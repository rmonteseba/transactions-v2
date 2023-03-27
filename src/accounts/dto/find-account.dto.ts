import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class FindAccountDto {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsBoolean()
  includeCurrency?: boolean;
}
