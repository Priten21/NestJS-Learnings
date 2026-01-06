import { Logger, Module } from '@nestjs/common';
import { UsersController } from './users/users.controller'
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CatsModule } from './cats/cats.module';
import { CustomerModule } from './customer/customer.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,CatsModule, CustomerModule],
  controllers: [CustomerController],
  providers: [CustomerService, Logger
    
  ],
})
export class AppModule {}
