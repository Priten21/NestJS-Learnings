import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware} from './middlewares/logger.middleware';
import middleware2 from './middlewares/middleware2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(middleware2);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
