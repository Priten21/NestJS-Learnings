import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware} from './middlewares/logger.middleware';
import middleware2 from './middlewares/middleware2';
import { HttpExceptionFilter } from './http-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(middleware2);
  const logger = new Logger('Bootstrap');
  app.useGlobalFilters(new HttpExceptionFilter(new Logger('HTTP')))
  app.useGlobalPipes(new ValidationPipe({disableErrorMessages: true, whitelist: true, forbidNonWhitelisted: true}));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
