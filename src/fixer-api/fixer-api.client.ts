import { Injectable } from '@nestjs/common';
import { FixerApiHeaders } from './config/types';
import {
  FIXER_API_LATEST_API,
  FIXER_API_KEY,
  FIXER_API_LATEST_API_SYMBOLS_DIVIDER
} from './config';
import axios from 'axios';
import { GetExchangeRatesDto } from './dto/get-exchange-rates.dto';

@Injectable()
export class FixerApiClient {
  async getExchangeRates({
    base,
    currencies
  }: GetExchangeRatesDto): Promise<any[]> {
    const headers: FixerApiHeaders = {
      apikey: FIXER_API_KEY
    };

    const params = {
      base,
      symbols: currencies.join(FIXER_API_LATEST_API_SYMBOLS_DIVIDER)
    };

    const {
      data: { rates }
    } = await axios.get(FIXER_API_LATEST_API, {
      headers,
      params
    });

    return rates;
  }
}
