import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Transaction } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionsDto } from './dto/filter-transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}
  async create({
    source,
    destination,
    amount,
    description
  }: CreateTransactionDto): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: {
        sourceAccountId: source,
        destinationAccountId: destination,
        amount,
        description
      }
    });
  }

  async findAll(
    filterTransactionsDto: FilterTransactionsDto
  ): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: {
        AND: {
          sourceAccountId: filterTransactionsDto.sourceAccountId,
          createdAt: {
            gte: new Date(filterTransactionsDto.from),
            lte: new Date(filterTransactionsDto.to)
          }
        }
      }
    });
  }
}
