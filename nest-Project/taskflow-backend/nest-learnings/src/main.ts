import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware} from './middlewares/logger.middleware';
import middleware2 from './middlewares/middleware2';
import { HttpExceptionFilter } from './http-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(middleware2);
  const logger = new Logger('Bootstrap');
  app.useGlobalFilters(new HttpExceptionFilter(new Logger('HTTP')))
  app.useGlobalPipes(new ValidationPipe({disableErrorMessages: true, whitelist: true, forbidNonWhitelisted: true}));

  const config = app.get(ConfigService)
  await app.listen( config.get('port') ?? 3000);
}
bootstrap();
