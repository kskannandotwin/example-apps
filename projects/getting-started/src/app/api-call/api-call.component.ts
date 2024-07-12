import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})



export class ApiCallComponent implements OnInit {

  users: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('users?page=2').subscribe(res => {
      this.users = res;
      console.log(this.users);
    })
  }
}
