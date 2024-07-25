import { Component } from '@angular/core';
import { Person, Post, PostsService, User } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts: Post[] = [];
  users: User[] = [];
  persons: Person[] = [];

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getData().subscribe(
      postData => this.posts = postData,
      error => console.log(error)
    );

    this.getUser();
    this.getPerson();
  }

  getUser(): void {
    this.postsService.getUserData().subscribe(
      userData => this.users = userData,
      error => console.log(error)
    );
  }

  getPerson(): void {
    this.postsService.getPersonData().subscribe(
      personData => this.persons = personData,      
      error => console.log(error)
    );
  }
}
