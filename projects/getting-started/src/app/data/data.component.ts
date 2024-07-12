import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadPosts();
    // console.log(this.posts);
  }

  loadPosts() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
