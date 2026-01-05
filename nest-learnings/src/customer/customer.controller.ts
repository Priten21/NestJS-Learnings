import { Body, Controller, Get,Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './customerDTO';


@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Get()
    getAllCusotmers(): CustomerDTO[] {
        return this.customerService.getallCustomers();
    }


    @Post()
    createCustomer(@Body() body){
        return this.customerService.createCustomer(body)
    }
}
