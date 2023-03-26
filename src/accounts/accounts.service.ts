import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Account } from '@prisma/client';
import { FindAccountDto } from './dto/find-account.dto';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  create({ userId, currencyId, balance }: CreateAccountDto): Promise<Account> {
    return this.prisma.account.create({
      data: {
        userId,
        balance,
        currencyId
      }
    });
  }

  findOne({ id }: FindAccountDto) {
    return this.prisma.account.findFirst({
      where: {
        id
      }
    });
  }
}
