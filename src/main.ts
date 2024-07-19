import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger as PinoLogger } from 'nestjs-pino';
import { AppModule } from './app.module';
import envs from './config/envs';
import { RpxCustomExceptionFilter } from './common/exceptions/rpc-custom-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.debug('Hola mundo!!');

  app.setGlobalPrefix('api');

  const logger = app.get(PinoLogger);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RpxCustomExceptionFilter());

  await app.listen(envs.PORT);
  logger.log(`Gateway running on port ${envs.PORT}`);
}
bootstrap();
