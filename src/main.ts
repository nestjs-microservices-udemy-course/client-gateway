import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger as PinoLogger } from 'nestjs-pino';
import envs from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const logger = app.get(PinoLogger);

  await app.listen(envs.PORT);
  logger.log(`Gateway running on port ${envs.PORT}`);
}
bootstrap();
