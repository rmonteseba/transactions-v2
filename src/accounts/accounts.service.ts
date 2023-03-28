import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Account, User } from '@prisma/client';
import { FindAccountDto } from './dto/find-account.dto';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async create({
    userId,
    currencyId,
    balance,
    description
  }: CreateAccountDto): Promise<Account> {
    return this.prisma.account.create({
      data: {
        userId,
        balance,
        description,
        currencyId
      }
    });
  }

  // Check if an account have enough funds for a transaction with a specific amount
  // The amount could be zero only for checking if the account has no negative funds
  doAccountHaveFunds(sourceAccount: Account, amount = 0) {
    return Number(sourceAccount.balance) - amount >= 0;
  }

  doAccountsHaveSameCurrency(accountA: Account, accountB: Account) {
    return accountA.currencyId === accountB.currencyId;
  }

  async updateBalance({
    account,
    balance,
    tx = this.prisma
  }: {
    account: Account;
    balance: number;
    tx?: any;
  }) {
    return tx.account.update({ where: { id: account.id }, data: { balance } });
  }

  isAccountFromUser({ userId }: Account, { id }: Partial<User>): boolean {
    return userId === id;
  }

  async findOne({ id }: FindAccountDto) {
    return this.prisma.account.findFirst({
      where: {
        id
      }
    });
  }

  async findOrFail({ id, includeCurrency }: FindAccountDto) {
    return this.prisma.account.findFirstOrThrow({
      where: {
        id
      },
      include: {
        currency: includeCurrency
      }
    });
  }
}
