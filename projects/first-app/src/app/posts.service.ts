import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  skills: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public http: HttpClient) { }

  // this is without observable

  // update(){
  //   this.http.get<Post[]>(`${environment.apiUrl}posts`)
  //   .subscribe(data => {
  //     this.posts = data;
  //   });
  // }

  // this is with observable
  getData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}posts`);
  }

  getUserData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}users`);
  }

  getPersonData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}persons`);
  }
}



