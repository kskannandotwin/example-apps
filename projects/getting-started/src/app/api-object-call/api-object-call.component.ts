import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface ObjectDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-api-object-call',
  templateUrl: './api-object-call.component.html',
  styleUrls: ['./api-object-call.component.scss']
})
export class ApiObjectCallComponent {

  objectDetails: ObjectDetails | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getObjectDetails(1);
  }

  getObjectDetails(id: number) {
    this.http.get<ObjectDetails>(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe({
      next: (data) => {
        this.objectDetails = data;
        console.log('Object details:', data);
      },
      error: (error) => {
        console.error('Error fetching object details' + error);
      }
    });
  }
}
