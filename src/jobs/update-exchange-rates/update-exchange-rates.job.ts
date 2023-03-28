import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CurrenciesService } from '../../currencies/currencies.service';
import { CRON_PERIODICITY } from './config';

@Injectable()
export class UpdateExchangeRatesJob {
  private readonly logger = new Logger(UpdateExchangeRatesJob.name);
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Cron(CRON_PERIODICITY)
  async handleCron() {
    this.logger.log('[JOB] Updating exchange rates');
    await this.currenciesService.updateExchangeRates();
    this.logger.log('[JOB] Exchange rates updated');
  }
}
