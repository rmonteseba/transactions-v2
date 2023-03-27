import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { CurrenciesModule } from '../currencies/currencies.module';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
  imports: [CurrenciesModule, AccountsModule],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
