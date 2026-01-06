import { Module,MiddlewareConsumer,NestModule } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { LoggerMiddleware } from '../middlewares/logger.middleware'
import { JwtModule, } from '@nestjs/jwt';


@Module({
    imports: [
    JwtModule.register({
      global: true,
      secret: "HEBFISHBEVSKJKSVNONVSVPBISBFRIBVISBS",
      signOptions: { expiresIn: '60s' },
    }),
  ],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports: [CustomerService]
})
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('customer'); 
  }
    // consumer
    // .apply(LoggerMiddleware)
    // .forRoutes({ path: 'customer', method: RequestMethod.POST });
    }