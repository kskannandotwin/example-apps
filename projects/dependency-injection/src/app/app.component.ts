import { Component } from '@angular/core';
import { FlowerService } from './flower.service';
import { LeafService } from './leaf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public flower: FlowerService, public leaf: LeafService) { }
}

