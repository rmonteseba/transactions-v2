import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';

@Module({
  exports: [AccountsService],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
