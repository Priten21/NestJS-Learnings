import { Logger, Module } from '@nestjs/common';
import { UsersController } from './users/users.controller'
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CatsModule } from './cats/cats.module';
import { CustomerModule } from './customer/customer.module';
import { UsersModule } from './users/users.module';
import { ConfigModule} from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [UsersModule,CatsModule, CustomerModule,ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    load: [config]
  })],
  controllers: [CustomerController],
  providers: [CustomerService, Logger
    
  ],
})
export class AppModule {}
