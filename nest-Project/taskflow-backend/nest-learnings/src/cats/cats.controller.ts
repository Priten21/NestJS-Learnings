import { Controller, Get, ParseIntPipe, Query, UsePipes } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CustomerService } from 'src/customer/customer.service';
import { MyFirstPipe } from 'src/pipes/my-first-pipe';
import { ToNumberPipe } from 'src/pipes/toNumber.pipe';
import { error } from 'console';
import { ConfigService } from '@nestjs/config';

@Controller('cats')
export class CatsController {
   constructor(private readonly customer: CustomerService,
    private configService: ConfigService
   ) {}

  @Get()
  getCustomer(@Query('limit', new ParseIntPipe({errorHttpStatusCode: 401}))limit) {

    console.log(this.configService.get('database.connectionString'));
    

    console.log("the type of limit is", typeof(limit));
    console.log(limit);
    return this.customer.getallCustomers()
  }
}
