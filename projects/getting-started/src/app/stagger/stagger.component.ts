import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.scss'],
  animations: [
    trigger('childComponent', [
      transition(':enter', [
        animate('2000ms 2s', style({ transform: 'translateX(80%)' })),
        animate('2000ms 2s', style({ transform: 'translateX(0)' })),
      ])
    ])
  ]
})
export class StaggerComponent {
  show = true;

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
     // this.show = !this.show;
    },2000);
  }
}
