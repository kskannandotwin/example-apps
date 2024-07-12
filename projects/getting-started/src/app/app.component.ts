import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Kannan {
  name: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  

  url = 'https://jsonplaceholder.typicode.com/todos';
  httpData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.http.get(this.url).subscribe(data => {
      this.httpData = data;
    });
  }
}
