import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { FindCurrencyDto } from './dto/find-currency.dto';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  findAll() {
    return this.currenciesService.findAll();
  }

  @Post('update-exchange-rates')
  updateExchangeRates() {
    return this.currenciesService.updateExchangeRates();
  }

  @Get(':id')
  findOne(@Param() findCurrencyDto: FindCurrencyDto) {
    return this.currenciesService.findOne(findCurrencyDto);
  }
}
