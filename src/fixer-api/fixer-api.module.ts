import { Module } from '@nestjs/common';
import { FixerApiClient } from './fixer-api.client';

@Module({
  exports: [FixerApiClient],
  providers: [FixerApiClient]
})
export class FixerApiModule {}
