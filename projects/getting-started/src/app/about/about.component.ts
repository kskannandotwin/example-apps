import { Component, OnInit } from '@angular/core';
import { blockTransition } from '../animations/blockTransition';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [blockTransition],
  host: {
    '[@blockTransition]': ''
  }
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
