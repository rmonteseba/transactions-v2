import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configurations } from './config/app.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configurations.server.port);
}
bootstrap();
