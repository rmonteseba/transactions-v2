import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FindCurrencyDto } from './dto/find-currency.dto';

@Injectable()
export class CurrenciesService {
  constructor(private prisma: PrismaService) {}
  create({ name, code }: CreateCurrencyDto) {
    return this.prisma.currency.create({
      data: {
        name,
        code
      }
    });
  }

  findAll() {
    return this.prisma.currency.findMany();
  }

  findOne({ id }: FindCurrencyDto) {
    return this.prisma.currency.findFirst({ where: { id } });
  }
}
