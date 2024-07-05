import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent {
  customers: Observable<Customer[]>;
  constructor(private customersService: CustomersService) {
    this.customers = customersService.getCustomers();
  }
}
