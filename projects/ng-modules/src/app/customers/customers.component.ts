import { Component } from '@angular/core';
import { UserService } from '../greeting/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
