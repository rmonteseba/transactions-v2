import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Transaction, Account } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionsDto } from './dto/filter-transactions.dto';
import { UserStateDto } from '../auth/dto/user-state.dto';
import { CurrenciesService } from '../currencies/currencies.service';
import { AccountsService } from '../accounts/accounts.service';
import { configurations } from '../config/app.config';
import { HttpStatusCode } from 'axios';

const { outsourcedTransactionCommissionPercentage } = configurations;
@Injectable()
export class TransactionsService {
  constructor(
    private prisma: PrismaService,
    private currenciesService: CurrenciesService,
    private accountsService: AccountsService
  ) {}

  private validateTransaction(sourceAccount: Account, amount = 0) {
    // Block for processing all the transaction business rules and identify if a transaction is valid
    try {
      if (!this.accountsService.doAccountHaveFunds(sourceAccount, amount))
        throw new Error(
          'The source account has no funds to tackle the transaction'
        );
    } catch (e) {
      throw new HttpException(e.message, HttpStatusCode.Conflict);
    }
  }

  private fixTransactionAmount(
    amount: number,
    sourceAccount,
    destinationAccount
  ): number {
    let fixedAmount = amount;
    const accountsHaveSameCurrency =
      this.accountsService.doAccountsHaveSameCurrency(
        sourceAccount,
        destinationAccount
      );

    if (!accountsHaveSameCurrency)
      fixedAmount = this.currenciesService.exchangeCurrency({
        amount,
        sourceCurrency: sourceAccount.currency,
        destinationCurrency: destinationAccount.currency
      });

    return fixedAmount;
  }

  private calculateCommission(
    user: UserStateDto,
    amount: number,
    sourceAccount: Account
  ) {
    return this.accountsService.isAccountFromUser(sourceAccount, user)
      ? 0
      : (outsourcedTransactionCommissionPercentage * amount) / 100;
  }

  async create(
    { source, destination, amount, description }: CreateTransactionDto,
    user: UserStateDto
  ): Promise<Transaction> {
    const [sourceAccount, destinationAccount] = await Promise.all([
      this.accountsService.findOrFail({
        id: source,
        includeCurrency: true
      }),
      this.accountsService.findOrFail({
        id: destination,
        includeCurrency: true
      })
    ]);

    this.validateTransaction(sourceAccount, amount);

    const commissionAmount = this.calculateCommission(
      user,
      amount,
      sourceAccount
    );

    const fixedAmount = this.fixTransactionAmount(
      amount,
      sourceAccount,
      destinationAccount
    );

    // Transaction block

    return this.prisma.$transaction(async (tx) => {
      const toDebitValue = amount + commissionAmount;

      const trxSourceAccount = await this.accountsService.updateBalance({
        account: sourceAccount,
        balance: Number(sourceAccount.balance) - toDebitValue,
        tx
      });

      // Concurrency measures for avoiding transactions with no funds due to possible race-conditions
      this.validateTransaction(trxSourceAccount);

      await this.accountsService.updateBalance({
        account: destinationAccount,
        balance: Number(destinationAccount.balance) + fixedAmount,
        tx
      });

      return tx.transaction.create({
        data: {
          sourceAccountId: source,
          destinationAccountId: destination,
          amount: fixedAmount,
          description,
          commissionAmount
        }
      });
    });
  }

  async findAll(
    { from, to, sourceAccountId }: FilterTransactionsDto,
    { id }: UserStateDto
  ): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: {
        destination: {
          user: {
            id
          }
        },
        AND: {
          sourceAccountId,
          createdAt: {
            gte: from,
            lte: to
          }
        }
      }
    });
  }
}
