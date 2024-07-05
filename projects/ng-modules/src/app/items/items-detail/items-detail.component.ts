import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss']
})
export class ItemsDetailComponent {
  id = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  }
}
