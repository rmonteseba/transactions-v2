import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionsDto } from './dto/filter-transactions.dto';
import { Transaction as TransactionModel } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LoggedUser } from '../shared/auth/logged-user.decorator';
import { UserStateDto } from '../auth/dto/user-state.dto';

@UseGuards(JwtAuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('transfer')
  create(
    @Body() createTransactionDto: CreateTransactionDto,
    @LoggedUser() user: UserStateDto
  ): Promise<TransactionModel> {
    return this.transactionsService.create(createTransactionDto, user);
  }

  @Get()
  findAll(
    @Body() filterTransactionsDto: FilterTransactionsDto,
    @LoggedUser() user: UserStateDto
  ): Promise<TransactionModel[]> {
    return this.transactionsService.findAll(filterTransactionsDto, user);
  }
}
