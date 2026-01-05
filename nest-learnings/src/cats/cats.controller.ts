import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CustomerService } from 'src/customer/customer.service';

@Controller('cats')
export class CatsController {
   constructor(private readonly customer: CustomerService) {}

  @Get()
  getCustomer() {
    return this.customer.getallCustomers()
  }
}
