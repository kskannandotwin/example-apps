import { Component, OnInit } from '@angular/core';
import { Customer, CustomersService } from '../customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.customersService.getCustomer(id).subscribe(customer => this.customer = customer);
  }
}
