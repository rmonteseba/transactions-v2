import { Module } from '@nestjs/common';
import { UpdateExchangeRatesModule } from './update-exchange-rates/update-exchange-rates.module';
@Module({
  imports: [UpdateExchangeRatesModule],
  exports: [UpdateExchangeRatesModule]
})
export class JobsModule {}
