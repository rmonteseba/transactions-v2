import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configurations } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configurations.server.port);
}
bootstrap();
