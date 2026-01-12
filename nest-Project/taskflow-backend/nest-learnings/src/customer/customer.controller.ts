import { Body, Controller, ForbiddenException, Get,Header,Headers,HttpException,Post, Query, Req, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './customerDTO';
import { error } from 'console';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CustomPipe } from 'src/pipes/custom.pipes';
import { AuthenticationGuard } from 'src/guards/autentication.guards';
import { AuthorizationGuard } from 'src/guards/authorization.guard';
import { Roles } from 'src/roles/roles.decorators';
import { CustomInterceptor } from 'src/Interceptors/custom.Interceptors';
import { request } from 'http';


// @UseFilters(HttpExceptionFilter)


@UseInterceptors(CustomInterceptor)
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Roles(['admin'])
    @Get()
    getAllCusotmers(@Req() { user }, @Headers('accept-language') language): CustomerDTO[] {
        // console.log(language);
        
        // throw new ForbiddenException()
        // throw new HttpException({error: true, servertime: new Date(), messgae:"Route Not Found"},404)
        return this.customerService.getallCustomers();
    }

    @Post()
    createCustomer(@Body() body: CustomerDTO,@Query() query:any){
        
        console.log("In the route handler logic");
        
        return this.customerService.createCustomer(body)
    }
}
