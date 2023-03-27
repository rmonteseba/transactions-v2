import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import { FixerApiModule } from '../fixer-api/fixer-api.module';

@Module({
  imports: [FixerApiModule],
  exports: [CurrenciesService],
  controllers: [CurrenciesController],
  providers: [CurrenciesService]
})
export class CurrenciesModule {}
