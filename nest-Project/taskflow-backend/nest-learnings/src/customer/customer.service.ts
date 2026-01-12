import { Injectable} from '@nestjs/common';
import { CustomerDTO } from './customerDTO';

@Injectable()
export class CustomerService {
customers: CustomerDTO[] = [];

getallCustomers() {
    return this.customers;
}

createCustomer(customer) {
    this.customers.push(customer);
}
}