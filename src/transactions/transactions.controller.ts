import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionsDto } from './dto/filter-transactions.dto';
import { Transaction as TransactionModel } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTransactionDto: CreateTransactionDto
  ): Promise<TransactionModel> {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll(
    @Body() filterTransactionsDto: FilterTransactionsDto
  ): Promise<TransactionModel[]> {
    return this.transactionsService.findAll(filterTransactionsDto);
  }
}
