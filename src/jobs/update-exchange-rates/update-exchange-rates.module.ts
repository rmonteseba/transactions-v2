import { Module } from '@nestjs/common';
import { UpdateExchangeRatesJob } from './update-exchange-rates.job';
import { CurrenciesModule } from '../../currencies/currencies.module';
@Module({
  imports: [CurrenciesModule],
  providers: [UpdateExchangeRatesJob],
  exports: [UpdateExchangeRatesJob]
})
export class UpdateExchangeRatesModule {}
