import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Transaction } from '@prisma/client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionsDto } from './dto/filter-transactions.dto';
import { UserStateDto } from '../auth/dto/user-state.dto';
@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}
  async create(
    { source, destination, amount, description }: CreateTransactionDto,
    user: UserStateDto
  ): Promise<Transaction> {
    // Perform business rules validation
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
