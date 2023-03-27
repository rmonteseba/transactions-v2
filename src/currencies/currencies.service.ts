import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FindCurrencyDto } from './dto/find-currency.dto';
import { FixerApiClient } from '../fixer-api/fixer-api.client';
import { Currency } from '@prisma/client';
import { configurations } from '../config/app.config';

@Injectable()
export class CurrenciesService {
  constructor(
    private prisma: PrismaService,
    private fixerApiClient: FixerApiClient
  ) {}
  create({ name, code, exchangeRate }: CreateCurrencyDto) {
    return this.prisma.currency.create({
      data: {
        name,
        code,
        exchangeRate
      }
    });
  }

  exchangeCurrency({
    amount,
    sourceCurrency,
    destinationCurrency
  }: {
    amount: number;
    sourceCurrency: Currency;
    destinationCurrency: Currency;
  }): number {
    return (
      (amount / Number(sourceCurrency.exchangeRate)) *
      Number(destinationCurrency.exchangeRate)
    );
  }

  async updateExchangeRates() {
    const currencies = await this.findAll({ select: { code: true } });
    const currencyCodes: string[] = currencies.map(({ code }) => code);
    const rates = await this.fixerApiClient.getExchangeRates({
      base: configurations.baseCurrencyExchangeRateIsoCode,
      currencies: currencyCodes
    });

    await this.prisma.$transaction(
      Object.entries(rates).map(([code, exchangeRate]) =>
        this.prisma.currency.update({
          where: { code },
          data: { exchangeRate }
        })
      )
    );
  }

  async findAll({
    select = undefined
  }: {
    select?: any;
  } = {}): Promise<Partial<Currency>[]> {
    return this.prisma.currency.findMany({ select });
  }

  async findOne({ id }: FindCurrencyDto): Promise<Currency> {
    return this.prisma.currency.findFirst({ where: { id } });
  }
}
